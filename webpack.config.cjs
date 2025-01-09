const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Entry point for your application
  entry: './public/assets/_next/static/chunks/pages/index-5c7de4d5ec0faa17.js', // Update this path if needed

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'public'), // Output directly to the 'public' folder
    filename: 'assets/_next/static/chunks/pages/[name].bundle.js', // Keep the structure
  },

  // Mode: 'development' or 'production'
  mode: 'development', // Change to 'production' for optimized builds

  // Module rules for handling different file types
  module: {
    rules: [
      // JavaScript: Use Babel to transpile modern JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // CSS: Load and bundle CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      // Images: Load image files
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]', // Keep images in the same structure
        },
      },
    ],
  },

  // Plugins
  plugins: [
    // Copy static assets to retain the directory structure
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' }, // Copy everything from 'public/assets' to 'assets'
      ],
    }),
  ],

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve files from the 'public' folder
    },
    compress: true,
    port: 9000,
    open: true, // Automatically open the browser
  },
};