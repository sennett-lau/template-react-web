const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@contexts': path.resolve(__dirname, 'src/contexts'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@routes': path.resolve(__dirname, 'src/routes'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@types': path.resolve(__dirname, 'src/types'),
			'@pages': path.resolve(__dirname, 'src/pages'),
		}
	},
}
