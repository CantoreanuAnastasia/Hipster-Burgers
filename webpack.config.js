
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: '[name] [ext]'
  },
  module: {
    rules: [
        {
         test: /\.txt$/, use: 'raw-loader' 
        },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        },
        {
          test: /\.mp4$/,
          use: 'file-loader?name=videos/[name].[ext]',
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader",
            options: {
              attrs: [":src"]
            }
          }
        }
    ],
  },
};