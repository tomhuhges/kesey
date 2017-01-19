import webpack from 'webpack'

export default function dev(options) {
  return {
    output: {
      // webpack-dev-server doesn't support [chunkhash],
      // so we're going with just [hash] here
      filename: '[name].[hash].js',
    },
    devServer: {
      // Enable history API fallback so HTML5 History API based routing works.
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.server.host, // Defaults to `localhost`
      port: options.server.port, // Defaults to 8080
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: options.paths.css,
        },
      ],
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true,
      }),
    ],
  }
}
