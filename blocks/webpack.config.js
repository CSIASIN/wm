const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(),
		'formats/tooltips/index': path.resolve( process.cwd(), 'src/formats/tooltips/index.js' ),
		'formats/popover/index': path.resolve( process.cwd(), 'src/formats/popover/index.js' ),
		'formats/text-utils/index': path.resolve( process.cwd(), 'src/formats/text-utils/index.js' ),
		'formats/inline-icon/index': path.resolve( process.cwd(), 'src/formats/inline-icon/index.js' ),
		'formats/color/index': path.resolve( process.cwd(), 'src/formats/color/index.js' ),
		'formats/badge/index': path.resolve( process.cwd(), 'src/formats/badge/index.js' ),
		'formats/ask-ai/index': path.resolve( process.cwd(), 'src/formats/ask-ai/index.js' ),
	},
};