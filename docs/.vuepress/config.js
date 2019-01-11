const path = require('path')

module.exports =  {
  dest: '../../document',
  base:'/vuepress/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Hello Calamus',
      description: 'Just playing around'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '中文',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  head: [
    ['link', { rel: 'icon', type:'image/x-icon',href: '/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/logo.ico` }],
    ['link', { rel: 'mask-icon', href: '/logo.ico', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/logo.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  port:2333,
  plugins: [
    ['@vuepress/active-header-links',{
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor',
    headerTopOffset: 120
  }],
  ['@vuepress/google-analytics', {
    ga: 'UA-128189152-1'
  }],
  ['@vuepress/blog'],
  ['@vuepress/i18n-ui'],
  ['@vuepress/last-updated'],
  ['@vuepress/medium-zoom',true],
  ['@vuepress/back-to-top',true],
  ['@vuepress/notification', true]
  ],
  markdown:{
    lineNumbers: true,
    anchor:{
      permalink: true, 
      permalinkBefore: true, 
      permalinkSymbol: '#' 
    },
    externalLinks:{
      target: '_blank', 
      rel: 'noopener noreferrer'
    }
  },
  stylus:{
    preferPathResolver: 'webpack' 
  },
  sass:{
    indentedSyntax: true
  },
  clientRootMixin: path.resolve(__dirname, 'mixin.js')
}

