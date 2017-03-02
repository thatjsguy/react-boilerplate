import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.config.babel'

import path from 'path'
import fs from 'fs'

const mainPath = path.resolve(__dirname, 'app', 'index.js')

module.exports = function() {
  let bundleStartDate = null;
  const compiler = Webpack(config)

  compiler.plugin('compile', function(){
    console.log('Bundling...')
    bundleStartDate = Date.now()
  })
  compiler.plugin('done', function(){
    console.log(`Bundle Complete in ${Date.now() - bundleStartDate}ms!`)
  })

  const bundler = new WebpackDevServer(compiler, {
    publicPath: '/dist/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  })

  bundler.listen(8080, 'localhost', function(){
    console.log('Bundling project, please wait...')
  })
}
