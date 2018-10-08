module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "main-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
};
