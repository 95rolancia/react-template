const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BannerPlugin } = require("webpack");

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"), // webpack으로 빌드한 결과물이 위치할 경로
    filename: "[name].[contenthash].js",
    clean: true, // 실행시 output 초기화
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // 동적으로 html 파일을 만듦과 동시에 번들링된 파일을 html에 설정해주는 플러그인
    new HtmlWebpackPlugin({
      title: "mirpia dev",
      template: "public/index.html",
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, "../src"), "node_modules"], // default: ["node_modules"]
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
};
