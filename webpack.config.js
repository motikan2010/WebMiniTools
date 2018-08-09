module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: __dirname + '/public/js/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
    ]
  }
};