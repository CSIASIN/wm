const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(),
		'formats/tooltips/index': path.resolve( process.cwd(), 'src/formats/tooltips/index.js' ),
		'formats/popover/index': path.resolve( process.cwd(), 'src/formats/popover/index.js' ),
		'formats/text-utils/index': path.resolve( process.cwd(), 'src/formats/text-utils/index.js' ),
	},
};