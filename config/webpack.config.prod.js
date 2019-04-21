'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.js');

const prodConfig = Object.assign({}, baseConfig, {
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules)/,
                use: "babel-loader",
            },
            {
                test: /\.css$|\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.(jpg|png|svg|woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                        publicPath: '/assets/',
                    }
                }
            },
        ]
    },
});

prodConfig.plugins.push(
    new ExtractTextPlugin({
        filename: "[contenthash].css"
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
);

module.exports = prodConfig;
