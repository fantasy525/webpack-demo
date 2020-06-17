const HtmlWebpackPlugin = require("html-webpack-plugin") ;
const webpack = require('webpack')
const path = require('path')
const _resolve = (dirName) => {
    const finalPath = path.resolve(__dirname,dirName);
    return finalPath;
}

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        demo1: './vue3/src/main.js'
    },
    output: {
        filename: "[name].bundle.js"
    },
    devServer: {
        port: 8080,
        hotOnly: true
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "vue3/index.html"
    }),
        new webpack.HotModuleReplacementPlugin({
            // Options...
        })
    ],
    optimization: {
        minimize: false,
        runtimeChunk: {
            name: entryPoint => `runtime~${entryPoint.name}`
        }
    }
}