# @pontx/dropbox-sign

Type-safe Dropbox Sign API SDK and safety-first CLI generated from the complete official OpenAPI documentation contract.

This is a Pontx community SDK, not an official Dropbox product. Its checked-in contract is reproducibly derived from Dropbox Sign's official OpenAPI repository at revision `f0c7887f2f56fb7a082b5db78a09856df2cb6ccf`.

## Safety status

- Complete contract target: 73 Endpoints and 217 Schemas, including callback event Schemas.
- JSON and multipart request media are preserved.
- PDF and ZIP downloads return `Blob` values and are never text-decoded.
- The CLI reads credentials from environment variables only and redacts them from previews.
- POST, PUT, PATCH, DELETE, and other mutation methods require a request-bound confirmation token produced by `--dry-run`.

## SDK

```bash
pnpm add @pontx/dropbox-sign
```

```ts
import { createDropboxSignClient } from "@pontx/dropbox-sign";

const client = createDropboxSignClient({
  apiKey: process.env.DROPBOX_SIGN_API_KEY,
});

const account = await client.account.accountGet({
  email_address: "signer@example.com",
});
```

OAuth access tokens are also supported:

```ts
const client = createDropboxSignClient({
  accessToken: process.env.DROPBOX_SIGN_ACCESS_TOKEN,
});
```

Exactly one credential must be configured. API keys use HTTP Basic authentication with an empty password; OAuth tokens use a Bearer header, matching Dropbox Sign's authentication documentation.

## CLI

```bash
export DROPBOX_SIGN_API_KEY='...'
pontx-dropbox-sign list apis
pontx-dropbox-sign show-api account accountGet
```

Read calls may run directly. Mutations are preview-first:

```bash
pontx-dropbox-sign call signatureRequest signatureRequestSend --body @request.json --dry-run
# Review the redacted request and copy its short-lived token.
pontx-dropbox-sign call signatureRequest signatureRequestSend --body @request.json --confirm 'ptx1...'
```

Binary downloads require an output file:

```bash
pontx-dropbox-sign call signatureRequest signatureRequestFiles \
  --signature_request_id '...' --output documents.zip
```

## Contract provenance

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). The metadata source contains the reproducible importer, source hashes, bilingual prose, and admission gates. The SDK is not published until those gates and the required Pontx core releases pass.

## Release boundary

Publishing is operator-owned. `prepublishOnly` refuses to continue until every exact Pontx dependency exists in the npm registry, a frozen `pnpm-lock.yaml` is checked in, and no local `link:`, `file:`, or workspace override remains. After those prerequisites exist it reruns the complete quality suite before npm can publish the package.

## License

SDK code is MIT licensed. Upstream OpenAPI material retains its own notices and attribution.
