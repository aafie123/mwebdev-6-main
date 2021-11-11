const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [ 
                    //'style-loader', 'css-loader'
                    MiniCssExtractPlugin.loader, 'css-loader' 
                ]
                
            },
            {
                test: /\.scss$/,
                use: [ 
                    //'style-loader', 'css-loader', 'sass-loader'
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' 
                ]
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}