const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

module.exports = env => {
  console.log('ENV', env.API_URL)
  return {
    entry: './src/index.js',
    // mode: process.env.ENV,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },
            {
              test: /\.html$/,
              use: {
                loader: 'html-loader',
              },
            },
            {
                test: /\.(s*)css$/,
                use: [
                  { loader: MiniCssExtractPlugin.loader },
                  'css-loader',
                  'sass-loader',
                ],
              }, 
              {
                test: /\.(png|gif|jpg)$/,
                use: [
                  {
                    'loader': 'file-loader',
                    options: {
                      name: 'assets/[hash].[ext]'
                    }
                  }
                ]
              },
              {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
              },
        ],
    },
    devServer: {  
      historyApiFallback: true,  
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
        new webpack.DefinePlugin({
          'process.env.API_URL': JSON.stringify(env.API_URL)
      })
    ],
}
}