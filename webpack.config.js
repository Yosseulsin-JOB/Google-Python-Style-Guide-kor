const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 3000,
  },
};
