const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode: 'development',
  entry:{
    home: path.resolve(__dirname, 'src/js/index.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
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
  		}
  	]
  },
  plugins:[
    new ExtractTextPlugin("css/[name].css")
  ]
}