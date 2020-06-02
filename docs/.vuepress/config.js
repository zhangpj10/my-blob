const navConfig = require('../../config/navConfig.js')
const sidebarConfig = require('../../config/sidebarConfig.js')
module.exports = {
    base: '/my-blob',
    title: 'zhangpj的博客',
    description: '技术的沉淀是需要积累的',
    head: [
        ['link', {
            rel: 'icon',
            // href: `/favicon.ico`
        }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }] //移动端优化
    ],
    port: 8080,
    dest: './docs/.vuepress/dist',
    themeConfig: { // 主题
        lastUpdated: 'Last Updated', //最后更新时间
        // logo: './public/image/zhangpj.png',
        nav: navConfig, // 导航栏
        sidebar: sidebarConfig, //侧边栏
        sidebarDepth: 2, //最大的深度为 2，它将同时提取 h2 和 h3 标题
    }
}