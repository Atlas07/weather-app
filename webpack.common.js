const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"]
			}
		]
	},
	plugins: [new CleanWebpackPlugin(["dist"])]
}
