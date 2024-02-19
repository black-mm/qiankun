const { name } = require('../package.json')
const port = 7777; // dev port

module.exports = {
  publicPath: '/sub-vue',
  transpileDependencies: ['common'],
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
