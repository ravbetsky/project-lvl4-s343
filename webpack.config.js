require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: [
    'babel-polyfill',
    `${__dirname}/src/index.jsx`,
  ],
  externals: {
    gon: 'gon',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['postcss-loader'],
      },
    ],
  },
};
