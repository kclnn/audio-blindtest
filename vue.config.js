const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          context: './bower_components',
          from: '**/*',
          to: 'webcomponents/'
        },
        {
          context: './src/webcomponents',
          from: '**/*',
          to: 'webcomponents/'
        }
      ])
    ]
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/audio-blindtest/'
    : '/',
  css: {
    sourceMap: true
  },
  productionSourceMap: false
};