const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = (env) => {
    const plugins = [
        new extractTextPlugin("css/[name].[hash].css")
    ]

    if (env.NOVE_ENV === 'production') {
        plugins.push(
            new cleanWebpackPlugin(['dist'], { root: __dirname })
        )
    }
    return {
        entry: {
            invie: path.resolve(__dirname, 'src/index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].[hash].js',
            publicPath: path.resolve(__dirname, 'dist') + "/",
            chunkFilename: 'js/[id].[chunkhash].js'
        },
        devServer: {
            port: 9500,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-2'],
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: extractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                fallback: 'file-loader',
                                publicPath: './fonts',
                                name: 'images/[name].[hash].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins
    }

}