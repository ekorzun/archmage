const {resolve} = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = (env) => {
	const plugins = [
		new HtmlPlugin({
			template: resolve('src/client/index.html')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			minChunks: ({resource}) => /node_modules/.test(resource),
			name: 'vendor'
		})
	]
	
	return [{
		entry: resolve('src/client'),
		output: {
			filename: 'bundle.[name].js',
			path: resolve('public')
		},
		plugins
	}, {
		entry: resolve('src/server'),
		externals: [nodeExternals()],
		output: {
			filename: '[name].js',
			path: resolve('bin')
		},
		target: 'node'
	}]
}