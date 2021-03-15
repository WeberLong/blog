module.exports = {
  // base: '/blog/',
  dest: 'dist',
  title: 'Blog',
  description: 'blog | javascript | node | vue | vuepress | webpack',
  serviceWorker: true,
  themeConfig: {
    repo: 'WeberLong',
    docsDir: 'docs',
    sidebarDepth: 3,
    nav: [
      {
        text: 'home',
        link: '/home/'
      },
      {
        text: 'long-ui',
        items: [
          { text: 'UI简介', link: '/long-ui/' },
          { text: '预览', link: 'http://www.weberlong.com/' },
          { text: '源码', link: 'https://github.com/WeberLong/long-ui' }
        ]
      },
      {
        text: 'archives',
        link: '/archives/'
      },
      {
        text: 'about',
        link: '/about/'
      }
    ],
    sidebar: {
      '/home/': [
        { title: 'Component', collapsable: false }
      ],
      '/archives/': [
        // { title: 'Webpack', collapsable: false }
        {
          title: '我的文章',
          collapsable: false,
          children: [
            'component',
            'webpack',
            'rtlcss',
          ]
        }
      ],
      '/long-ui/': [
        {
          title: 'long-ui',
          collapsable: false,
          children: [
            'guide',
            'tree',
          ]
        }
      ]
    }
  }
}
