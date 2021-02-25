const common = require('./webpack.common');
const path = require('path');
const { merge }  = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",  // Inject Styles into the DOM, it is faster for development than creating a new file everytime
          "css-loader"    // Turn css into JS
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  }
});
