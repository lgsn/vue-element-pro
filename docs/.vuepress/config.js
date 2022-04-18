module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'vue-element-pro',
  base: '/vue-element-pro-docs/',
  description: '管理后台前端解决方案，基于Vue@2.6.11 和Element-UI',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    home: '/guide/',
    docsDir: 'docs',
    base: '/',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 3,
    navbar: [
      // NavbarItem
      {
        text: '指南',
        link: '/guide/'
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
          collapsable: false,
          children: ['/guide/preface/', '/guide/', '/guide/layout/', '/guide/menu', '/guide/permission', '/guide/appInfo', '/guide/nav', '/guide/newPage', '/guide/axios', '/guide/build']
        },
        {
          text: '组件',
          collapsable: false,
          children: [
            { text: 'GViewCard 业务布局', link: '/guide/component/viewCard.md' },
            { text: 'GTableData 表格数据页', link: '/guide/component/tableData.md' },
            { text: '分页', link: '/guide/component/gPagination.md' },
            { text: '图标', link: '/guide/component/gIcon.md' },
            { text: '按钮图标', link: '/guide/component/gBtnIcon.md' },
            { text: '上传', link: '/guide/component/gUpload.md' },
            { text: '头像', link: '/guide/component/gAvatar.md' },
          ]
        },
        {
          text: '指令',
          collapsable: false,
          children: [
            { text: 'v-copy 复制', link: '/guide/directive/copy.md' },
            { text: 'v-rights 权限', link: '/guide/directive/rights.md' },
          ]
        },
        {
          text: '其他',
          collapsable: false,
          children: [
            { text: '常见问题', link: '/guide/other/fqa.md' }
          ]
        }
      ]
    },
    repo: 'https://gitlab.com/foo/bar',
    repoLabel: 'GitHub',
    logo: '',
  }
}
