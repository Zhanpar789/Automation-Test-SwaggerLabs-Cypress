const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

  module.exports = defineConfig({
    e2e: {
      async setupNodeEvents(on, config) {
        const bundler = createBundler({
          plugins: [createEsbuildPlugin(config)],
        });
  
        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);
  
        return config;
      },
      specPattern: "swager-labs-demo/test/features/**/*.feature", // Lokasi file feature
      supportFile: false, // Tidak menggunakan file support default
      env: {
        stepDefinitions: "swager-labs-demo/test/steps/**/*.js", // Cari step definitions di folder Steps
      },
    },
  });
