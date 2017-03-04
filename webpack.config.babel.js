import Webpack from 'webpack';
import path from 'path';
import combineLoaders from 'webpack-combine-loaders';

const cssFormat = '[name]__[local]___[hash:base64:5]';

// loaders
const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [['es2015', {modules: false}], 'react']
      }
    }
  ]
};
const styleLoader = {
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
     {
       loader: 'sass-loader'
     }
   ]
};

// Plugins
const plugins = [
  new Webpack.HotModuleReplacementPlugin(),
  /* Production only! - Enable tree shaking: https://swizec.com/blog/using-webpack-2-production/swizec/7356
  new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      join_vars: true,
      if_return: true
    },
    output: {
      comments: false
    }
  })*/
];

// Resolve
const resolveModules = [
  'node_modules',
  path.resolve(__dirname, 'app/sass'),
  // path.resolve(__dirname, 'node_modules/bourbon'),
];

// out ------->
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
      styleLoader,
    ]
  },
  resolve: {
    modules: resolveModules
  },
  plugins,
};
