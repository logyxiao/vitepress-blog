const { getPosts } = require('./theme/serverUtils')

async function config() {
    return {
        head: [
            ['script', {}, `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P6PHKRN');       
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
