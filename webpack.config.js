const path = require("path");

module.exports = {
	// Location of entry file or main file
	entry: "./src/index.js",
	output: {
		// Name of the output file
		filename: "main.js",
		// Path to the folder where file will be generated
		path: path.resolve(__dirname, "dist"),
	},

	// What mode to use? development or production
	// production code is minified
	mode: "development",
	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.css$/i,
				// css-loader takes the css styles and puts them into main.js
				// style-loader takes the styles and injects them into the dom
				// The order of execution is reverse. First css-loader is executed then style-loader.
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
