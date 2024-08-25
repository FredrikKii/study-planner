import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    e2e: {
      baseUrl: "http://localhost:5173", // Set your app's base URL
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
    
  },
});
