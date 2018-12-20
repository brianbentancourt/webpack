const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
  	rules:[
  		{
  			test: /\.css$/,
  			use: ExtractTextPlugin.extract({
	          use: "css-loader"  
	        })
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
  			use: {
					loader: 'babel-loader',
					options:{
						presets:['@babel/preset-env'],
						plugins: ["@babel/plugin-transform-runtime"]
					}
				}
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options:{
						limit: 100000,
					}
				}
			}
  	]
  },
  plugins:[
    new ExtractTextPlugin("css/styles.css")
  ]
}