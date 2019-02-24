"use strict";
var slug = require('markdown-slug');
module.exports = {
    title: 'JS-Books',
    description: '书籍是人类进步的阶梯',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' }],
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
        slugify: function (e) {
            return slug(e);
            console.info(slug(e));
        },
        config: function (md) {
            md.use(require('markdown-it-task-checkbox'));
        }
    }
};
