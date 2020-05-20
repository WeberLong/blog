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
        link: '/long-ui/'
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
        { title: 'Webpack', collapsable: false }
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
