const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { BannerPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // webpack으로 빌드한 결과물이 위치할 경로
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // 번들링된 파일 상단에 배너 표시해주는 플러그인
    new BannerPlugin({
      banner: `${new Date()} Bundled Files`,
    }),
    // 동적으로 html 파일을 만듦과 동시에 번들링된 파일을 html에 설정해주는 플러그인
    new HtmlWebpackPlugin({
      title: "mirpia dev",
      template: "public/index.html",
    }),
  ],
  devServer: {
    // dev server 사용 시 정적인 파일들의 경로
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true, // gzip 사용
    port: 9000,
    client: {
      logging: "info",
      overlay: true,
      progress: true,
    },
    hot: true, // Hot Module Replacement
    open: true,
  },
};
