import Webpack from 'webpack'
import path from 'path'
import combineLoaders from 'webpack-combine-loaders';

const cssFormat = '[name]__[local]___[hash:base64:5]';

const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  loader: 'babel-loader'
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
    loaders: [
      babelLoader,
      {
         test: /\.(scss|sass)$/,
         loader: combineLoaders([
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'sass-loader' },
          {
            loader: 'autoprefixer-loader',
            query: {
              browsers:'last 2 versions'
            }
          }
         ])
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
}
