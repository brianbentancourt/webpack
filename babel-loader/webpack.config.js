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
  		// aca van los loaders
  		{
  			//test: que tipo de archivo quiero reconocer,
  			//use: que loader se va a encargar del archivo
  			test: /\.css$/,
  			use: ExtractTextPlugin.extract({
	          //{ loader: "style-loader" }, // Agrega el css al DOM en un <style>
	          use: "css-loader"  // interpreta los archivos css en js via import
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
  		}
  	]
  },
  plugins:[
    new ExtractTextPlugin("css/styles.css")
  ]
}