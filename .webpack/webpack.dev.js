const { join } = require("path");
const path = require("path");
const { DefinePlugin, BannerPlugin } = require("webpack");

module.exports = {
  mode: "development",
  plugins: [
    // 번들링된 파일 상단에 배너 표시해주는 플러그인
    new BannerPlugin({
      banner: `${new Date()} Bundled Files Development Mode`,
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
    historyApiFallback: true,
  },
};
