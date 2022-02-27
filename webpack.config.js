const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMap: true,
    },
  }
  
  const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
      postcssOptions: {
        plugins: () => [
          autoprefixer({
            browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
          }),
        ],
      },
    },
  }

module.exports = {
    entry: {
      app: path.join(__dirname, 'src', 'index.tsx')
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist')
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
        rules: [
            {
              test: /\.(js|ts)x?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },
            {
                test: /\.scss$/,
                use: [
                'style-loader', 
                CSSModuleLoader,
                postCSSLoader,
                'sass-loader'
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new CleanWebpackPlugin(),
    ],
};