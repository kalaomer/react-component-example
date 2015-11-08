var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {  
  entry:  {
    app: './src/index.tsx',
    vendors: ["react"]
  },
  output: {
    path: "./www/assets/vendor/",
    publicPath: "/assets/vendor/",
    filename: "bundle.js?[hash]"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    modulesDirectories: [
      'src',
      'node_modules'
    ],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.s[ca]ss(\?.*$|$)/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",
      filename: "vendors.js",
      minChunks: Infinity
    }),
    new ExtractTextPlugin("bundle.css")
  ]
}