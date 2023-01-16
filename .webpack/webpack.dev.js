const { join } = require("path");
const path = require("path");
const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

require("dotenv").config({ path: join(__dirname, "../.env.development") });

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new DefinePlugin({
      "process.env.TEST_URL": JSON.stringify(process.env.TEST_URL),
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public"), // dev server 사용 시 정적인 파일들의 경로
    },
    compress: true, // gzip 사용
    port: 9000,
    client: {
      logging: "info",
      overlay: true,
      progress: true,
    },
    hot: true, // Hot Module Replacement
    open: true, // 실행 시 브라우저 자동으로 열기
  },
});
