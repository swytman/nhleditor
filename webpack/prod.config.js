const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'bootstrap-loader',
        'webpack-hot-middleware/client',
        './src/index',
    ],
    output: {
        publicPath: '/test-wa/dist/',
    },

    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
            __DEVELOPMENT__: false,
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
        }),
    ],
};
