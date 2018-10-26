const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // Точка входа
  entry: { main: './src/js/script.js' },
  // Выход
  output: {
    // Папка сборки
    path: path.resolve(__dirname, 'docs'),
    // Имя собранного JS
    filename: 'script.[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|webp|ico)$/,
        use: [
          {
            loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'img/[name].[ext]',
              
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'fonts/[name].[ext]'
              }
            
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
           MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
      // ,
      // {
      //   test: /\.html$/,
      //   use: {
      //     loader: "html-loader"
      //   }
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('docs', {} ),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    })
    ,
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/html/index.html',
      favicon: './src/favicon/favicon.ico',
      filename: 'index.html'
    })
  ]
}