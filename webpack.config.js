const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html',
});

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

  return {
    plugins: [
      htmlPlugin,
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
    ],
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            {loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
            {loader: 'css-loader'},
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
            {loader: 'css-loader'},
            {loader: 'sass-loader'},
          ],
        },
      ],
    },
  };
};

