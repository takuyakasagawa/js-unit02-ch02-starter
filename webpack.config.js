var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './www/src/sample/app.jsx',
    output: {
        path: './www/sample/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
           {
             test: /\.(js|jsx)$/,
             loader: 'babel',
             exclude: /node_modules/,
             query: {
               presets: ["es2015", "react"],
             }
           },
           {
             test: /\.css$/,
             loaders: ['style', 'css?modules'],
           }
        ]
    }
}

//module.exports = {
//entry: './src/index.js',
//output: {
//  filename: './bundle.js',
// path: path.resolve(__dirname, 'dist')
//},
//devServer: {
//  hot: true,
//  hotOnly: true,
//  watchContentBase: true,
//  watchOptions: {
//    ignored: /node_modules/
//  }
//},
//plugins: [
//  new webpack.HotModuleReplacementPlugin()
//],
//};