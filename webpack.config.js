const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const faviconsWebPackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    },
    performance: {
        hints: false
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            file: "./index.html"
        }),
        new faviconsWebPackPlugin('./public/icon.png'),
    ]
}   