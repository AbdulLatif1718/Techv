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
		domains: ['cdn.techverge.africa'],
		formats: ['image/webp'],
		minimumCacheTTL: 604800, // 1 week
	},
	async headers() {
		return [
		  {
			source: '/(.*)',
			headers: [
			  {
				key: 'X-Frame-Options',
				value: 'DENY',
			  },
			  {
				key: 'Content-Security-Policy',
				value: `default-src 'self' cdn.techverge.africa`,
			  }
			],
		  },
		]
	}
};
const { i18n } = require('./next-i18next.config');

module.exports = {
	i18n,
};