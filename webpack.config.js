
const path = require('path');

const VuePlugin = require('vue-loader-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const MiniCss = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: path.join(__dirname, './src/index.js'),
	output: {
		path: path.join(__dirname, 'docs','gourd'),
		filename: 'gourd.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCss.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			}
		]
	},
	plugins: [
		new VuePlugin(),
		new MiniCss({
			filename: 'gourd.css'
		})
	]
}