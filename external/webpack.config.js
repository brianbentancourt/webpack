const path = require('path');
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
  			use: [
	          { loader: "style-loader" }, // Agrega el css al DOM en un <style>
	          { loader: "css-loader" } // interpreta los archivos css en js via import
	        ]
  		}
  	]
  }
}