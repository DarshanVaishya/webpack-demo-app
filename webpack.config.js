const path = require("path");
// This will insert newly generated script file with contenthash into HTML.
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// Location of entry file or main file
	entry: "./src/index.js",
	output: {
		// Name of the output file
		filename: "main.[contenthash].js",
		// Path to the folder where file will be generated
		path: path.resolve(__dirname, "dist"),
	},

	// What mode to use? development or production
	// production code is minified
	mode: "development",
	// devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.scss$/i,
				// The order of execution is reverse in use
				// prettier-ignore
				use: [
          "style-loader", // 3. Injects styles into the DOM
          "css-loader",   // 2. Converts css into commonjs
          "sass-loader"   // 1. Converts scss to css
        ],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
};
