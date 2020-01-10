const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    var debug = env.NODE_ENV === "development";
    const config = {
        mode: debug ? "development" : "production",
        entry: "./src/index.js",
        devtool: debug ? "source-map" : "nosources-source-map",
        module: {
            rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: path.join(__dirname, "public/index.html"),
                inject: true
            })
        ]
    };
    return config;
};