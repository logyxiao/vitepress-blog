const { getPosts } = require('./theme/serverUtils')

async function config() {
    return {
        head: [
            ['script', {  src: 'https://www.googletagmanager.com/gtag/js?id=G-FE8P9C6S9M', }],
            ['script', {}, `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FE8P9C6S9M');
        `]
        ],// 谷歌统计脚本,需要替换成自己的
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
                { text: '归档', link: '/pages/archives' },
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
