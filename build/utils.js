const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '..')
exports.SRC_PATH = path.resolve(ROOT_PATH, 'src')
exports.DIST_PATH = path.resolve(ROOT_PATH, 'dist')
exports.MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules')
const MATCH_ALL_NON_RELATIVE_IMPORTS = /^\w.*$/i;
var autoprefixer = require('autoprefixer');

module.exports = [{
  output: {
    filename: 'index.js',
    library: 'atrium-react-plugin-beta',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname+'/../', 'dist'), // where to place webpack files
  },
  entry: {
    plugin: './src/index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }],
  },
  externals: [MATCH_ALL_NON_RELATIVE_IMPORTS, {

  }],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  }
}];
