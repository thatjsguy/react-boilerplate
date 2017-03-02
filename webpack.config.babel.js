import Webpack from 'webpack'
import path from 'path'
import combineLoaders from 'webpack-combine-loaders';

const cssFormat = '[name]__[local]___[hash:base64:5]';

const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: 'babel-loader'
};

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './app/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      babelLoader,
      {
         test: /\.(scss|sass)$/,
         use: [
           'style-loader',
           {
             loader: 'css-loader',
             options: {
               modules: true,
               localIdentName: '[name]__[local]___[hash:base64:5]'
             }
           },
           'sass-loader'
         ]
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
}
