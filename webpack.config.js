const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const autoprefixer = require('autoprefixer');
const path = require('path');



module.exports = {
    mode: "development",
    entry: [
        __dirname + "/src/index.js",
        __dirname + "/src/app.scss"
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.ico$|\.mp3$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets'
                        },
                    },
                    'img-loader',
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
        // new CopyWebpackPlugin({
        new CopyPlugin({
            patterns: [
                // { from: __dirname + "/src/index.html", to: 'assets' },
                { from: 'src/assets', to: 'assets' }
            ],
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            inject: 'body',
            title: ""
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
    },
};