const path = require('path');

module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../homepage/app/static'),
    publicPath: '../build/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};