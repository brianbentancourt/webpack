const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        modules: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: './dist/',
        library:'[name]'
    },
    plugins: [
        //La siguiente configuración es para exportar los archivos de dependencias, EJ.: React, Bootstrap, una sola vez y que peudan ser usados como "dlls"
        //en los otros archivos js del proyecto, de esta manera no hay que compilarlos cada vez que se ejecuta el build del proyecto.
        new webpack.DllPlugin({ 
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ],
};