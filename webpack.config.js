const path              = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
let extractTextPlugin   = ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) 

module.exports = {
  entry: {
    index: "./src/skeleton.js",
  },
  output: {
    path: path.resolve('.'),
    filename: "[name].js",
    library: "skeleton",
    libraryTarget: "umd"
  },
  externals: {
    react: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
         test: /\.css$/,
         use: extractTextPlugin
      }
    ]
  },
  plugins: [ new ExtractTextPlugin({ filename: "[name].css" }) ]
}
