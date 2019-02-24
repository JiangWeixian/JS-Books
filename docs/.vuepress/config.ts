const slug = require('markdown-slug')

module.exports = {
  title: 'JS-Books',
  description: '书籍是人类进步的阶梯',
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' } ],
  ],
  themeConfig: {
    sidebar: {
      '/CSS2/': [
        '',
        'guide',
        'CSS单位/CSS单位',
        'CSS列表和生成内容/',
      ],
    }
  },
  markdown: {
    slugify: (e: any) => {
      return slug(e)
      console.info(slug(e))
    },
    config: (md: any) => {
      md.use(require('markdown-it-task-checkbox'))
    }
  }
}
