const path = require('path');

module.exports = {
  module:'development',
  // webpackのエントリー場所
  entry: './src/food-app/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist'),
    publicPath:'/dist/'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}