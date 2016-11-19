var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
	entry: {
		'index': './src/index.js'
	},
	output: {
		filename: 'bundle.js?[hash]',
		publicPath: "/",
		path: './dist'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(less|css)$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&localIdentName=[local]_[hash:base64:5]')
			},
			{ 
				test: /\.(png|jpg)$/, 
				exclude: /node_modules/,
				loader: 'url?limit=8192&name=[path][name].[ext]?[hash:5]' 
			},
			{ 
				test: /\.html$/, 
				exclude: /node_modules/,
				loader: 'html' 
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new OpenBrowserPlugin({
			url: ' http://localhost:8080/'
		}),
		new uglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
	    new ExtractTextPlugin("aio.css?[hash]"),
	    new AssetsPlugin()
	]
}