const routes = require('next-routes')

module.exports = routes()
	.add({ name: 'postDetail', pattern: '/post/:postTitle', page: 'postDetail' })
	.add({ name: 'posts', pattern: '/posts', page: 'postList' })
