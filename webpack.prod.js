const common = require('./webpack.common');
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');  // default js minimizer, we do not have to install it

module.exports = merge(common, {
  mode: "production", 
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtraPlugin.loader,  //This plugin extracts CSS into separate files. Nice for production!
          "css-loader"
        ],
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [new MiniCssExtraPlugin({ filename: "css/styles.css"})]
});
