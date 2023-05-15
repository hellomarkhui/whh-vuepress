module.exports = {
  title: '前端开发',
  description: '前端开发积累，前端开发规范，代码管理。',
  host: "localhost",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: '/logo.png',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      {
        text: '指南',
        link: '/standard/',
      },
      { text: '代码管理', link: '/code/' },
      { text: '统一格式', link: '/format/' },
    ],
    sidebar: {
      '/standard/': [
        ['', '前言'],
        {
          title: '编程规约',
          collapsable: false,
          children: [
            ['code/', '介绍'],
            'code/name',
            'code/html',
            'code/css',
            'code/sass-less',
            'code/javascript',
          ]
        },
        {
          title: 'Vue 项目规范',
          collapsable: false,
          children: [
            'vue/code',
            'vue/fold',
          ]
        },
        'other/',
      ],
      '/code/': [
        '',
        'commit',
      ],
      '/format/': [
        ['', '介绍'],
        'prettier',
        'eslint',
        'problems',
      ],
    }
  }
};