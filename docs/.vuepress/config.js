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
        link: '/'
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
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
  }],
}
