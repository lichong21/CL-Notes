import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/CL-Notes/',
  title: "CL Notes",
  description: "My Daily Notes",
	srcDir: 'src',
	srcExclude: ['**/README.md', '**/TODO.md'],
  themeConfig: {
		search: {
			provider: 'local'
		},
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/api-examples' },
      { text: '相关文档',
				items: [
					{ text: 'Vue3', link: '/vue3/index' },
					{ text: 'TypeScript', link: '/typeScripts/index' },
					{ text: '微信小程序', link: '/wechat/index' },
				]
			},
    ],

		sidebar: {
			'/examples/': [
				{
					text: 'Examples',
					items: [
						{ text: 'api-examples', link: '/examples/api-examples' },
						{ text: 'markdown-examples', link: '/examples/markdown-examples' },
					]
				}
			],
			'/vue3/': [
				{
					text: 'Vue3',
					items: [
						{ text: 'Index', 
							items: [
								{ text: 'Index1', link: '/vue3/index1' },
								{ text: 'Index2', link: '/vue3/index2' },
							]
						},
						{ text: 'Index1', link: '/vue3/index1' },
						{ text: 'Index2', link: '/vue3/index2' },
					]
				}
			],
			'/typeScripts/': [
				{
					text: 'TypeScript',
					items: [
						{ text: 'Index', link: '/typeScripts/index' },
						{ text: 'Index1', link: '/typeScripts/index1' },
						{ text: 'Index2', link: '/typeScripts/index2' },
					]
				}
			],
			'/wechat/': [
				{
					text: '微信小程序',
					collapsed: false,
					items: [
						{ text: 'Index', link: '/wechat/index' },
						{ text: 'Index1', link: '/wechat/index1' },
						{ text: 'Index2', link: '/wechat/index2' },
					]
				}
			]
		},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lichong21/CL-Notes' }
    ]
  }
})
