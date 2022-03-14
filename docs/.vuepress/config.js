module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'vue-element-pro',
  description: '管理后台前端解决方案，基于Vue@2.6.11 和Element-UI',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    home: '/guide',
    editLink: false,
    navbar: [
      // NavbarItem
      {
        text: '指南',
        link: '/guide'
      },
      {
        text: '其他资源',
        link: '',
        children: [
          { text: 'Vue', link: 'https://cn.vuejs.org/v2/guide/index.html' },
          { text: 'Element-UI', link: 'https://element.eleme.cn/#/zh-CN' },
        ]
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          link: '',
          children: [
            // SidebarItem
            {
              text: '介绍',
              link: '/guide',
              children: [],
            },
          ],
        }
      ]
    },
    repo: 'https://gitlab.com/foo/bar',
    repoLabel: 'GitHub',
    logo: 'https://vuejs.org/images/logo.png',
  }
}
