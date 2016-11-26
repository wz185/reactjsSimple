var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
    // index: './src/index.js', // entries cant not point to another entry point.
    temperature: './src/components/temperature/app.js',
    books: './src/components/books/app.js'
  },
  output: {
    path: __dirname,
    publicPath: '/public/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
        new CommonsChunkPlugin({
            filename: "commons.js",
            name: "commons"
        })
  ]
};
