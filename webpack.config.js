var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
    ]
  }
}
