const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist_prod"),
        publicPath:"",
        assetModuleFilename:'assets/[name].[ext]'
    },
   
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject:true
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
               
            },
            {
                test: /\.html$/,
        // More information here https://webpack.js.org/guides/asset-modules/
              use: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/images/[name][ext]'
                }
              },
              {
                test: /\.(woff2?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/fonts/[name][ext]'
                }
              }

        ]
    },



};