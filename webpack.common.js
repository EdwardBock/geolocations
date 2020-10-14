const path = require('path');

module.exports = {
	entry: {
		frontend: path.resolve(__dirname, './src/script/frontend.js'),
		tinymce_plugin: path.resolve(__dirname, './src/script/tinymce-plugin.js'),
		"meta-box": path.resolve(__dirname, './src/script/meta-box.js'),
	},
	output: {
		path: path.resolve(__dirname) + '/public/js',
		filename: '[name].js',
		sourceMapFilename: '[name].map'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules|bower_components/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							["@babel/preset-env", {
								useBuiltIns: "entry",
								debug: true,
							}],
							"@babel/preset-react",
						],
						plugins: [
							"@babel/plugin-proposal-object-rest-spread"
						]
					}
				},
			}
		]
	},
	externals : {
		react: 'React',
		'react-dom': 'ReactDOM',
		'_': 'underscore',
	},
};