const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'dist'),
            },
            {
                directory: path.join(__dirname, 'public')
            }
        ],
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});