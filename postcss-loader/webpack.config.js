const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/js/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: './dist/',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: "css-loader"
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader", "sass-loader"]
				})
			},
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					use: [
						"css-loader",
						{
							loader: "stylus-loader",
							options: {
								use: [
									require('nib'),
									require('rupture')
								],
								import: [
									'~nib/lib/nib/index.styl',
									'~rupture/rupture/index.styl',
								]
							}
						}
					]
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					use: [
						"css-loader",
						{
							loader: "less-loader",
							options: {
								noIeCompat: true
							}
						}
					]
				})
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{
						loader: 'postcss-loader'
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/env", "@babel/react"],
						plugins: ["@babel/plugin-transform-runtime"]
					}
				}
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5000000000,
							outputPath: './fonts',
							publicPath: './fonts',
							name: '[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.(mp4|webm)$/,
				use: {
					loader: 'file-loader',
					options: {
						limit: 100000000,
						name: 'videos/[name].[ext]'
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("css/styles.css")
	]
}