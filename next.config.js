
const withSass = require('@zeit/next-sass');
module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/index' },
            '/about': { page: '/about' },
            '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
            '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
            '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
        }
    },
}
const withImages = require('next-images')
module.exports = withImages({
    webpack(config, options) {
        return config
    }
})
