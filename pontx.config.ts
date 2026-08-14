import { defineConfig } from "pontx";
import { createGracefulClientPlugin } from "@pontx/sdk/plugin";

export default defineConfig({
  outDir: "src/apis",
  origins: [{
    name: "dropbox-sign",
    localPath: "./openapi.json",
  }],
  plugins: [createGracefulClientPlugin()]
});
