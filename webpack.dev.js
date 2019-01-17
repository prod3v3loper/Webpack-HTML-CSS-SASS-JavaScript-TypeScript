const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.config.js' );

module.exports = merge( common, {
    mode: 'development',
    optimization: {
        usedExports: true
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            options: {
                configFileName: 'tsconfig.dev.json'
            },
            exclude: /node_modules/
        }]
    }
} );