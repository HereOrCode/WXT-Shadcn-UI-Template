import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig, WxtViteConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],

  imports: false,
  srcDir: "src",
  webExt: {
    disabled: false,
    chromiumArgs: ["--disable-features=DisableLoadExtensionCommandLineSwitch"],
  },
  outDir: "dist",
  // outDirTemplate: "{{browser}}-mv{{manifestVersion}}",

  manifestVersion: 3,

  manifest: (env) => {
    const isDev = env.mode === "development";

    return {
      name: "WXT Shadcn UI Template",
      description:
        "A WXT template for building browser extensions with Shadcn UI and Tailwind CSS.",
      version: "0.1.0",
      // default_locale: "en",

      permissions: ["storage"],
      host_permissions: ["<all_urls>"],
    };
  },

  vite: (env) => {
    return {
      esbuild: {
        drop: env.mode === "production" ? ["console", "debugger"] : [],
      },
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    } as WxtViteConfig;
  },
});
