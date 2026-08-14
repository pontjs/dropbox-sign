import { describe, expect, it, vi } from "vitest";
import { resolveDropboxSignAuthorization } from "../../src/auth";
import { createDropboxSignClient, DropboxSignHttpError } from "../../src/index";

describe("@pontx/dropbox-sign", () => {
  it("requires exactly one credential and implements the documented schemes", () => {
    expect(() => resolveDropboxSignAuthorization({})).toThrow(/exactly one/i);
    expect(() => resolveDropboxSignAuthorization({ apiKey: "key", accessToken: "token" }))
      .toThrow(/exactly one/i);
    expect(resolveDropboxSignAuthorization({ apiKey: "api-key" }))
      .toBe(`Basic ${Buffer.from("api-key:").toString("base64")}`);
    expect(resolveDropboxSignAuthorization({ accessToken: "oauth-token" }))
      .toBe("Bearer oauth-token");
  });

  it("adds Basic authentication and decodes JSON", async () => {
    const payload = { account: { account_id: "abc123" } };
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "content-type": "application/json; charset=utf-8" },
    }));
    const client = createDropboxSignClient({ apiKey: "api-key", fetch: fetchMock });

    await expect(client.account.accountGet({ email_address: "signer@example.com" }))
      .resolves.toEqual(payload);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://api.hellosign.com/v3/account?email_address=signer%40example.com");
    expect(new Headers(init.headers).get("Authorization"))
      .toBe(`Basic ${Buffer.from("api-key:").toString("base64")}`);
  });

  it("preserves binary download bytes as a Blob", async () => {
    const bytes = new Uint8Array([0x50, 0x4b, 0x03, 0x04]);
    const fetchMock = vi.fn().mockResolvedValue(new Response(bytes, {
      status: 200,
      headers: { "content-type": "application/zip" },
    }));
    const client = createDropboxSignClient({ accessToken: "oauth-token", fetch: fetchMock });

    const result = await client.signatureRequest.signatureRequestFiles("request-id", {});
    expect(result).toBeInstanceOf(Blob);
    expect(Array.from(new Uint8Array(await (result as Blob).arrayBuffer()))).toEqual(Array.from(bytes));
    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(new Headers(init.headers).get("Authorization")).toBe("Bearer oauth-token");
  });

  it("supports explicit multipart requests without forcing an invalid boundary", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ api_app: {} }), {
      status: 201,
      headers: { "content-type": "application/json" },
    }));
    const client = createDropboxSignClient({ apiKey: "api-key", fetch: fetchMock });
    const logo = new Blob(["logo"], { type: "image/png" });

    await client.apiApp.apiAppCreate({
      name: "Example App",
      domains: ["example.com"],
      custom_logo_file: logo,
    }, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(init.body).toBeInstanceOf(FormData);
    expect(new Headers(init.headers).get("Content-Type")).toBeNull();
    const body = init.body as FormData;
    expect(body.get("name")).toBe("Example App");
    expect(body.getAll("domains")).toEqual(["example.com"]);
    expect(body.get("custom_logo_file")).toBeInstanceOf(Blob);
  });

  it("throws a typed HTTP error without logging credentials", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ error: { error_msg: "Denied" } }), {
      status: 401,
      headers: { "content-type": "application/problem+json" },
    }));
    const client = createDropboxSignClient({ apiKey: "never-log-this", fetch: fetchMock });

    await expect(client.account.accountGet({ email_address: "signer@example.com" }))
      .rejects.toMatchObject<Partial<DropboxSignHttpError>>({
        name: "DropboxSignHttpError",
        status: 401,
        responseBody: { error: { error_msg: "Denied" } },
      });
  });
});
