const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({
  input = './src/boot.ts',
  library,
  output
}) => [{
  mode: 'development',
  devtool: 'inline-source-map',
  entry: input,
  output: {
    path: path.resolve(__dirname, '../../../public/compiled'),
    filename: `${output}.dev.js`,
    library
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.png$/i,
        type: 'asset/resource'
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}, {
  mode: 'production',
  entry: input,
  output: {
    path: path.resolve(__dirname, '../../../public/compiled'),
    filename: `${output}.min.js`,
    library
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.png$/i,
        type: 'asset/resource'
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}];
