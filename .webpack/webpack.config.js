const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const { DefinePlugin } = require("webpack");
const dotenv = require("dotenv");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const envConfig = isProduction
    ? require("./webpack.prod")
    : require("./webpack.dev");

  const envFile = isProduction ? ".env.production" : ".env.development";
  const envVars = dotenv.config({ path: envFile }).parsed;

  // Add environment variables to webpack as a new plugin
  envConfig.plugins.push(
    new DefinePlugin({
      "process.env": JSON.stringify(envVars),
    })
  );

  return merge(commonConfig, envConfig);
};
