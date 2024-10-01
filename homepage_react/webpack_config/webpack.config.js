const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../homepage/app/static'),
    publicPath: '../../homepage/app/static',
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
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './images/',
              publicPath: './static/images/',
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/, // フォントファイルの拡張子を追加
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // ファイル名をそのまま保持
              outputPath: './fonts/', // フォントを出力するパス
              publicPath: './static/fonts/', // 公開される際のパス
            },
          },
        ],
      },
    ],
  },
  watch: true,
};
