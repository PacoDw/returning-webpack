const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', // It detects any error and shows you exactly the file where it occurred
  devServer: {
    contentBase: './dist' // webpack-dev-serve package provides you with a simple web server and the ability to use live reloading
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({        // It create a html in memory and add all of scritp to run 
      title: 'Output Management!'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'   // The publicPath will be used within our server script as well in order to make sure files are served correctly on http://localhost:3000
  },
};