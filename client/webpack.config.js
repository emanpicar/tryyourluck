const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        vendor: [
            'createjs'
        ],
        tryyourluck: './src/js/index.js',
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: './',
        filename: './public/[name].[chunkhash].bundle.js',
        chunkFilename: './public/[name].[chunkhash].bundle.js'
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            Images: path.resolve(__dirname, './src/images/'),
            Css: path.resolve(__dirname, './src/css/'),
            Js: path.resolve(__dirname, './src/js/'),
            createjs: 'createjs/builds/1.0.0/createjs.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './public/images/'
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {   
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /node_modules[/\\]createjs/,
                loaders: [
                    'imports-loader?this=>window',
                    'exports-loader?window.createjs'
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./public/[name].css",
            chunkFilename: "./public/[id].css",
        }),
        new HtmlWebpackPlugin({
            template: './src/view/index.html'
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
};