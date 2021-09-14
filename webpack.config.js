const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = env => {
    console.log('Environment:', __dirname);

    const environment = env.environment;
    const isProduction = environment === 'production';
    const isDevelopment = environment === 'development';

    return {
        mode: environment,
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            host: 'localhost',
            port: 8080,
            historyApiFallback: true,
        },

        entry: [
            path.join(PATH_SOURCE, './index.js'),
        ],

        output: {
            path: PATH_DIST,
            filename: 'js/[name].[hash].js',
        },

        module: {
            rules: [
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    debug: false,
                                    useBuiltIns: 'usage',
                                    corejs: 3
                                }],
                                '@babel/preset-react'
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(PATH_SOURCE, './index.html')
            }),
            new CleanWebpackPlugin()
        ]
    }
}