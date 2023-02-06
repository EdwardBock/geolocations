const path = require("path");
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

module.exports = {
    ...defaultConfig,
    entry: {
        gutenberg: './src/script/gutenberg.js',
        "meta-box": './src/script/meta-box.js',
        "tinymce-plugin": './src/script/tinymce-plugin.js',
        frontend: './src/script/frontend.js',
    },
    output: {
        path:  path.resolve(__dirname, "./public/assets"),
    },
    resolve: {
        ...defaultConfig.resolve,
        fallback: {
            "querystring": false,
        }
    }
};
