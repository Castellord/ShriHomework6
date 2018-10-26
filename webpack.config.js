const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;


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
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        use: [
          'url-loader?limit=1000',
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-webp')({
                  quality: 30
                }),
                require('imagemin-svgo')({
                  plugins: [
                    { removeTitle: true },
                    { convertPathData: false }
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'file-loader'
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
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('docs', {} ),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/html/index.html',
      filename: 'index.html'
    }),
  new ImageminPlugin({
    pngquant: {
      quality: '95-100'
    }
  })
  ]
}