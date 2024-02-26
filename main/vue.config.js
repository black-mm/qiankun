const { name } = require('../package.json')

module.exports = {
  transpileDependencies: ['common'],
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    devtool: 'source-map',
  },
}
