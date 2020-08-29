const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SocialTags = require('social-tags-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/www',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-srcsets-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(jpg|png|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: "./src/images/favicon/favicon.ico",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin({
      patterns: [
      { from: './src/assets', to: 'assets' }
    ]}),
    // new SocialTags({
    //   appUrl: 'http://poppa.info/',
    //   facebook: {
    //     'og:url': "http://poppa.info",
    //     'og:type': "website",
    //     'og:title': "Pndr",
    //     'og:image': './src/images/facebook.png',
    //     'og:description': "Pndr is....",
    //     'og:site_name': "Poppa"
    //   },
    //   twitter: {
    //     "twitter:card": "summary",
    //     "twitter:site": "@pndr",
    //     "twitter:creator": "@pndr",
    //     "twitter:url": "http://pndr.co",
    //     "twitter:title": "Pndr",
    //     "twitter:description": "Pndr",
    //     "twitter:image": './src/images/twitter.png'
    //   },
    // })
  ]
}
