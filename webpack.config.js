/**
 * Webpack with TypeScript
 * 
 * @copyright   (c) 2019, Samet Tarim 
 * @author      Samet Tarim (prod3v3loper)
 * @package     Syntaxo
 * @since       1.0
 * @link        https://www.tnado.com/blog/webpack-project-example/
 * @link        https://github.com/prod3v3loper/Webpack-HTML-CSS-SASS-JavaScript
 * @see         https://webpack.js.org/guides/getting-started/
 * @see         https://www.typescriptlang.org/index.html
 */
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' ); // https://github.com/jantimon/html-webpack-plugin
const CleanWebpackPlugin = require( 'clean-webpack-plugin' ); // https://webpack.js.org/guides/output-management/

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    // https://webpack.js.org/concepts/#output
    output: {
        path: path.resolve( __dirname, './dist' ),
        // publicPath: '',
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                        // use when css not import in javascript
                        // options: {
                        //     insertAt: 'top', // Insert style tag at top of <head>
                        //     singleton: true, // this is for wrap all your style in just one style tag
                        // }
                    },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin( ['dist'] ),
        new HtmlWebpackPlugin( {
            title: 'WebPack - HTML, JavaScript, SASS & Typescript',
            template: './public/index.html',
            filename: 'index.html',
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        } )
    ]
};