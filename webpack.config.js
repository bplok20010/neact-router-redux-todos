var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: './demo1/src/App.js',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            query: {
                presets: [['es2015', { loose :true }], 'react']
            }
        }, ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname+'/demo1', 'dist')
    },
    plugins2: [
       new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};