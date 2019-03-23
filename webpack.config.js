const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // mode: 'development', // Set the mode configuration option to development to make sure that the bundle is not minified
  // optimization: {
  //   usedExports: true
  // }
  mode: 'production' // the whole bundle is now minified
};