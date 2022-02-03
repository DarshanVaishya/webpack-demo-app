const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",

	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},

	// It does not create files in the dist folder
	// Everything is stored in the memory
	devServer: {
		watchFiles: ["./src/*"],
	},
});
