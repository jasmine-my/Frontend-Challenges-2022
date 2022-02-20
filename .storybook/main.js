const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "webpackFinal": async (config) => {
      config.module.rules.unshift({
        test: /\.svg$/,
        use: ["svg-url-loader"],
      });

      config.resolve.modules = [
        path.resolve(__dirname, ".."),
        "node_modules",
        "styles",
      ];
      config.resolve.alias = {
        ...config.resolve.alias,
        "@components": path.resolve(__dirname, "../src/components"),
        "@assets": path.resolve(__dirname, "../src/assets"),
      };
      return config;
    },
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}