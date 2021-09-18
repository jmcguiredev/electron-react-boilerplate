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
            extensions: ['.js', '.jsx', '.ts', '.tsx', 'css', 'scss']
        },
        devServer: {
            host: 'localhost',
            port: 8080,
            historyApiFallback: true,
        },

        entry: [
            path.join(PATH_SOURCE, './index.tsx'),
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
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ]
                        }
                    },
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif)$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: 'images/[hash]-[name].[ext]',
                        },
                      },
                    ],
                  },
                  {
                      test: /\.(sass|scss)$/,
                      use: [
                          'style-loader',
                          'css-loader',
                          'sass-loader'
                      ]
                  },
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