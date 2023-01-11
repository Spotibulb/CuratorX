const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /(node_modules)/,
        use: 'ts-loader',
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/SignUp': {
        target: 'http://localhost:8080/',
        router: () => 'http://localhost:3000/',
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', 'jsx', '.tsx', '.ts'],
  },
  
};
