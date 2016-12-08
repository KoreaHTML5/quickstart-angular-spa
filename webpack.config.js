const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app',
    vendor: ['angular', 'angular-route']
  },
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
        /* chunkName= */"vendor",
        /* filename= */"vendor.bundle.js")
  ],
  devServer: {
    inline: true,
    port: 9000
  }
};
