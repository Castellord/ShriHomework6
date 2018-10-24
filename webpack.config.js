const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const environment = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        main: __dirname + '/src/js/boot.js'
    },
    output: {
        path: __dirname + '/docs',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
                    loader: 'file-loader'  
              },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
            
        ]
    },

    resolve: {
        root: __dirname
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
        new CopyWebpackPlugin([
            {from:'./src/assets',to:'img'} 
        ]),
        new ImageminPlugin({
            pngquant: {
              quality: '95-100'
            }
          }),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"' + environment + '"'}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        
    ],

    devServer: {
        contentBase: './docs'
    }
};
