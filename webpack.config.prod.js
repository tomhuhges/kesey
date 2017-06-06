const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './src/index',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'codemirror',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: './',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      include: path.join(__dirname, 'src/css'),
    },
    {
      test: /\.svg$/,
      loader: 'file-loader',
      include: path.join(__dirname, 'public'),
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
    }),
    new ExtractTextPlugin('style.[contenthash].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        unused: true,
        dead_code: true,
      },
      mangle: {
        except: ['webpackJsonp'],
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
      minChunks: Infinity,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
    modulesDirectories: [
      'node_modules',
    ],
  },
};
