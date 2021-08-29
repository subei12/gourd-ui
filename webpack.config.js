
const path = require('path');

const VuePlugin = require('vue-loader-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const MiniCss = require('mini-css-extract-plugin');

const Copy = require('copy-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.join(__dirname, './build/build.js'),
	output: {
		path: path.join(__dirname, 'dist'),
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
						loader: 'css-loader',
						options: {
							esModule: false
						}
					},
					{
						loader: 'less-loader'
					}
				]
			}, {
				test: /\.css$/,
				use: [
					{
						loader: MiniCss.loader
					},
					{
						loader: 'css-loader',
						options: {
							esModule: false
						}
					}]
			},
			{
				test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'files'
					}
				}]
			}
		]
	},
	plugins: [
		new VuePlugin(),
		new MiniCss({
			filename: 'gourd.css'
		}),
		new CleanWebpackPlugin()
	]
}