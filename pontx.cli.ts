import { runCLI } from "pontx/sdk-cli";
import { resolveDropboxSignAuthorization } from "./src/auth";

export default runCLI({
  name: "pontx-dropbox-sign",
  executeApi: {
    baseURL: "https://api.hellosign.com/v3",
    beforeRequest: (request) => {
      const headers = new Headers(request.init.headers);
      headers.set("Authorization", resolveDropboxSignAuthorization({
        apiKey: process.env.DROPBOX_SIGN_API_KEY,
        accessToken: process.env.DROPBOX_SIGN_ACCESS_TOKEN,
      }));
      return { ...request, init: { ...request.init, headers } };
    },
  },
  generateSamples: [{
    case: "nodejs",
    description: "Generate a safe Node.js SDK sample",
    generateSample: async () => {
      return `import { createDropboxSignClient } from "@pontx/dropbox-sign";

async function main() {
  const client = createDropboxSignClient({
    apiKey: process.env.DROPBOX_SIGN_API_KEY,
  });

  const response = await client.account.accountGet({
    email_address: "signer@example.com",
  });
  console.log(response);
}

main();
`;
    },
  }],
});
