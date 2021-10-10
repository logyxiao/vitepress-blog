const { getPosts } = require('./theme/serverUtils')

async function config() {
    return {
        title: 'logyxiao',
        base:'/',
        description: 'vitepress,blog,blog-theme',
        themeConfig: {
            posts: await getPosts(),
            website: 'https://github.com/logyxiao/vitepress-blog', //copyright link
            comment: {
                repo: 'logyxiao/vitepress-blog',
                themes: 'github-light',
                issueTerm: 'pathname'
            },
            nav: [
                { text: '首页', link: '/' },
                { text: '文章', link: '/pages/archives' },
                { text: '标签', link: '/pages/tags' },
                { text: '关于', link: '/pages/about' }
                // { text: 'Airene', link: 'http://airene.net' }  -- External link test
            ]
        },
        srcExclude: ['README.md'] // exclude the README.md , needn't to compiler
        /*
        vite: {
            build: { minify: false }
        },
        optimizeDeps: {
            keepNames: true
        }
        */
    }
}

module.exports = config()
