export type DropboxSignCredentials = {
  apiKey?: string;
  accessToken?: string;
};

export function resolveDropboxSignAuthorization(
  credentials: DropboxSignCredentials,
): string {
  const apiKey = credentials.apiKey?.trim();
  const accessToken = credentials.accessToken?.trim();
  if (!!apiKey === !!accessToken) {
    throw new Error(
      "Configure exactly one Dropbox Sign credential: apiKey or accessToken",
    );
  }
  if (accessToken) return `Bearer ${accessToken}`;
  return `Basic ${Buffer.from(`${apiKey}:`, "utf8").toString("base64")}`;
}
