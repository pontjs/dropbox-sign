export class DropboxSignHttpError extends Error {
  readonly status: number;
  readonly responseBody: unknown;

  constructor(status: number, responseBody: unknown) {
    super(`Dropbox Sign API request failed with status ${status}`);
    this.name = "DropboxSignHttpError";
    this.status = status;
    this.responseBody = responseBody;
  }
}

function normalizedContentType(response: Response): string {
  return response.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase() || "";
}

async function decodeResponse(response: Response): Promise<unknown> {
  if (response.status === 204 || response.status === 205) return undefined;
  const contentType = normalizedContentType(response);
  if (contentType === "application/json" || contentType.endsWith("+json")) {
    return response.json();
  }
  if (contentType.startsWith("text/") || contentType === "application/xml") {
    return response.text();
  }
  return response.blob();
}

export function createDropboxSignRequest(fetchFn: typeof fetch = fetch) {
  return async (url: string, init: RequestInit): Promise<unknown> => {
    const response = await fetchFn(url, init);
    const body = await decodeResponse(response);
    if (!response.ok) throw new DropboxSignHttpError(response.status, body);
    return body;
  };
}
