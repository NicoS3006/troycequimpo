const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // Set to production for live deployment
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Name of the output JS file
    publicPath: './', // Use relative paths for compatibility with GitHub Pages or custom domains
    assetModuleFilename: 'assets/[name][ext]', // Define where static assets will be output
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match JavaScript and JSX files
        exclude: /node_modules/, // Exclude dependencies in node_modules
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Load CSS files and inject styles into DOM
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/, // Match image files
        type: 'asset/resource', // Handle assets using Webpack's asset module
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font files
        type: 'asset/resource', // Handle fonts as assets
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to the HTML template
      filename: 'index.html', // Name of the output HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Directory to serve
    },
    compress: true, // Enable Gzip compression
    port: 9000, // Port for the development server
    open: true, // Automatically opens the browser for local testing
  },
};
