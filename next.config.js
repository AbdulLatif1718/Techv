module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
				port: '',
				pathname: '/dms/image/v2/**',
			},
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};
const { i18n } = require('./next-i18next.config');

module.exports = {
	i18n,
};