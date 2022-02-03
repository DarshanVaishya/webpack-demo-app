const path = require("path");

module.exports = {
	// What mode to use? development or production
	// production code is minified
	mode: "development",
	devtool: "source-map",
	// Location of entry file or main file
	entry: "./src/index.js",
	output: {
		// Name of the output file
		filename: "main.js",
		// Path to the folder where file will be generated
		path: path.resolve(__dirname, "dist"),
	},
};
