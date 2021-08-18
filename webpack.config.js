const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        // publicPath: 'public/',
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@localization': path.resolve(__dirname, 'src/localization'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@containers': path.resolve(__dirname, 'src/containers')
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
                // use: {
                //     loader: ["style-loader", "css-loader", "sass-loader"],
                //     options: {
                //         include: [
                //             path.join(__dirname, 'node_modules/bootstrap/scss/')
                //         ]
                //     }
                // }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:["@babel/preset-env", "@babel/preset-react"],
                        include: [
                            path.join(__dirname, 'node_modules/react-intl'),
                            path.join(__dirname, 'node_modules/intl-messageformat'),
                            path.join(__dirname, 'node_modules/intl-messageformat-parser'),
                        ],
                    }
                }
            },
            {
                test: /\.(mp3|png|woff2|woff|ttf|svg|eot)$/,
                // include: SRC,
                resolve: {
                    extensions: [".mp3", ".png", ".woff2", ".ttf", ".woff", ".svg", ".eot"]
                },
                use: ["file-loader"]
            },
        ]
    },

    mode: "development", // or production

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3005,
        hot: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })
    ]
};


