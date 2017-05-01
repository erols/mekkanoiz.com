var path = require('path');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist/assets'),
		filename: '[name].bundle.js',
		publicPath: "/assets", 
		sourceMapFilename: '[name].map'
	},

	module: {
		loaders: [{
			test: /\.js/,
			loaders: ['babel-loader']
		}]
	},

	devServer: {
		port: 7777,
		host: 'localhost',
		historyApiFallback: true,
		noInfo: false,
		stats: 'minimal',
		publicPath: '/assets/'
	}
}
