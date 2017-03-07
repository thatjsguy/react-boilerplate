import Webpack from 'webpack';
import path from 'path';
import combineLoaders from 'webpack-combine-loaders';

const cssFormat = '[name]__[local]___[hash:base64:5]';

const appPath = (p) => path.resolve(__dirname, `app/${p}`);

// loaders
const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [['es2015', {modules: false}], 'stage-0', 'react']
      }
    }
  ]
};
const styleLoader = {
   test: /\.(s?css|sass)$/,
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
       loader: 'sass-loader',
       options: {
         // these are "shortcuts" for easy importing
         includePaths: [
           require("bourbon").includePaths,
           appPath('sass'),
           'node_modules/reset-css'
         ]
       }
     }
   ]
};
// const iconLoader = {
//     test: /react-icons\/(.)*(.js)$/,
//     use: [
//       {
//           test: /react-icons\/(.)*(.js)$/,
//           loader: 'babel-loader',
//           query: {
//             presets: ['es2015', 'react']
//           }
//       }
//     ]
// }

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
  'node_modules'
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
      // iconLoader,
      babelLoader,
      styleLoader
    ]
  },
  resolve: {
    modules: resolveModules
  },
  plugins,
};
