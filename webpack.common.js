const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx|ts|tsx)$/i,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Healiom Landing Page',
            template: './public/index.html',
            inject: 'body',
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            "...", // ensures js/css minimization is still handled by webpack
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['optipng', { optimizationLevel: 5 }],
                            ['pngquant', { quality: [0.6, 0.8] }]
                        ]
                    }
                }
            })
        ]
    },
    performance: {
        maxAssetSize: 600000,
        maxEntrypointSize: 500
    }
};