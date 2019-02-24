import { getMenus } from '../utils/menus'
const slug = require('markdown-slug')

module.exports = {
  title: 'JS-Books',
  description: '书籍是人类进步的阶梯',
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' } ],
  ],
  nav: [
    { text: '主页', link: '/' },
    { text: '技术栈', link: '/Guide/' },
    { text: '目录', link: '/Menus/' },
    { text: 'Github', link: 'https://github.com/JiangWeixian/JS-Books/' },
  ],
  themeConfig: {
    sidebar: {
      ...getMenus(),
    }
  },
  markdown: {
    slugify: (e: any) => {
      return slug(e)
    },
    config: (md: any) => {
      md.use(require('markdown-it-task-checkbox'))
    }
  }
}
