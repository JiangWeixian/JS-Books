import { getMenus } from '../utils/menus'
import { repo } from '../config'

console.log(getMenus())

module.exports = {
  title: 'JS-Books',
  description: '书籍是人类进步的阶梯',
  base: `/${repo}/`,
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' } ],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', link: '/Menus/' },
      { text: 'Github', link: 'https://github.com/JiangWeixian/JS-Books/' },
    ],
    sidebar: {
      ...getMenus(),
      // '/JSDataStructureAndAlgo/': [
      //   '',
      //   '基础',
      //   '队列/queue'
      // ],
      '/Menus/': [
        '',
      ]
    }
  },
  markdown: {
    config: (md: any) => {
      md.use(require('markdown-it-task-checkbox'))
    }
  }
}
