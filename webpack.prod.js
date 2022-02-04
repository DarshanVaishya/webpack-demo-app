const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "production",

	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "./imgs/[name].[hash].[ext]",
		clean: true,
	},

	plugins: [],
	plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],

	module: {
		rules: [
			{
				test: /\.s?css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},

	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: "./src/template.html",
				minify: true,
			}),
		],
	},
});
