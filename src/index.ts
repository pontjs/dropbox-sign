import { createGracefulClient } from "@pontx/sdk";
import type { APIs } from "./apis/dropbox-sign/apis";
import { specMeta } from "./apis/dropbox-sign/apiMeta";
import {
  resolveDropboxSignAuthorization,
  type DropboxSignCredentials,
} from "./auth";
import { createDropboxSignRequest } from "./transport";

export type DropboxSignClientConfig = DropboxSignCredentials & {
  baseUrl?: string;
  fetch?: typeof fetch;
};

export function createDropboxSignClient(config: DropboxSignClientConfig) {
  const authorization = resolveDropboxSignAuthorization(config);
  return createGracefulClient<APIs>({
    pontxSpecMeta: specMeta as any,
    baseUrl: config.baseUrl || "https://api.hellosign.com/v3",
    baseRequestFn: createDropboxSignRequest(config.fetch),
    beforeRequest: async (url, init) => {
      const headers = new Headers(init.headers);
      headers.set("Authorization", authorization);
      return { url, init: { ...init, headers } };
    },
  });
}

export { DropboxSignHttpError } from "./transport";
export type { DropboxSignCredentials } from "./auth";
export type { APIs } from "./apis/dropbox-sign/apis";
export * as schemas from "./apis/dropbox-sign/schemas";

export default createDropboxSignClient;
