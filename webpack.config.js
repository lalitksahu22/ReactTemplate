const webpack = require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin')
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins=[]
  plugins.push(
    new HtmlWebpackPlugin({template:"./src/index.html"}),
    // new MiniCssExtractPlugin({
    //   filename: "style/[name].css",
    //   chunkFilename: "[id].css",
    //  })
)

module.exports = {
  entry: [
    './src/index.js',
  ],
 
  output: {
    path: __dirname+"/dist",
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
     
    },

    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        //MiniCssExtractPlugin.loader,
        'style-loader',
        'css-loader'
      ],
    },
  ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    port: 9000
  },
  plugins: plugins,
  devtool: 'inline-source-map',
};
