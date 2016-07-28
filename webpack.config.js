var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: './src/index.jsx',

    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.web.js', '.webpack.js']
    },


    output: {
        filename: 'bundle.js',
        path: __dirname + '/assets'
    },

    module: {
        loaders: [
            {
                test: /\.[j|t]sx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        // new StaticSiteGeneratorPlugin('main', data.routes, data),
    ],

    devServer: {
        publicPath: '/assets',
        filename: 'bundle.js',
        port: 8080
    }
}