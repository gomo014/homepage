const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'staticfiles'),  // Djangoの静的ファイルディレクトリ
    filename: 'bundle.js',
    publicPath: '/staticfiles/'  // DjangoのSTATIC_URLに対応するパス
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
