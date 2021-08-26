
const path = require('path');

const VuePlugin = require('vue-loader-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const MiniCss = require('mini-css-extract-plugin');

const Copy = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.join(__dirname, './src/build.js'),
	output: {
		path: path.join(__dirname, 'docs', 'gourd'),
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
			},
			{
				test: /\.(eot|ttf|svg|woff|woff2)$/,
				use: ['url-loader']
			}, {
				test: /\.css$/,
				use: [{
					loader: MiniCss.loader
				},
				{
					loader: 'css-loader'
				}]
			}
		]
	},
	plugins: [
		new VuePlugin(),
		new MiniCss({
			filename: 'gourd.css'
		}),
		new Copy({
			patterns:[{
				from:path.join(__dirname,'assets','icon'),
				to:path.join(__dirname,'docs','gourd','icon')
			}]
		})
	]
}