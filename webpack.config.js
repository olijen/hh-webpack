var path                = require('path');
var webpack             = require('webpack');
var BowerWebpackPlugin  = require('bower-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'assets')
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [//{
            //    test: /\.css$/,
            //    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            //},

            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

              // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
              // loads bootstrap's css.
              { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
              { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
              { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
              { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
    
                { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },

            {test: /\.jsx$/, loader: 'jsx-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.hbs$/, loader: 'handlebars-loader'},
            {
                test: /\.(eot|woff|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production')
        }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),
        new BowerWebpackPlugin({
            modulesDirectories: ['bower_components'],
            manifestFiles: ['bower.json', '.bower.json'],
            includes: /.*/,
            excludes: /.*\.less$/
            //}),
            //new ExtractTextPlugin('styles.css', {
            //    allChunks: true
        })
    ]
};
