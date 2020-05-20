module.exports = {
  base: '/blog/',
  dest: 'dist',
  title: 'blog',
  description: 'my blog',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    docsDir: 'docs',
    nav: [
      {
        text: 'home',
        link: '/home/'
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
    // sidebar: {
    //   '/home/': [
    //     {
    //       title: 'webpack',
    //       collapsable: false,
    //       children: [
    //         ['webpack/', 'Introduction']
    //       ]
    //     },
    //     {
    //       title: 'vue组件',
    //       collapsable: false,
    //       children: [
    //         ['component/', 'Introduction']
    //       ]
    //     }
    //   ]
    // }
  }
}
