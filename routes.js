const routes = require('next-routes')

module.exports = routes()
	.add({ name: 'index', pattern: '/', page: 'index' })
	.add({ name: 'postDetail', pattern: '/:category/:postTitle', page: 'postDetail' })
	.add({ name: 'posts', pattern: '/:category', page: 'postList' })
