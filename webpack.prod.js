const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "production",

	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist"),
		// Cache busting and storing images in a folder
		assetModuleFilename: "./imgs/[name].[hash].[ext]",
		// Cleans file in dist folder when rebuilding
		clean: true,
	},
});
