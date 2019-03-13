const path = require('path')
const next = require('next')
const express = require('express')
const compression = require('compression')
const LRUCache = require('lru-cache')
const cors = require('cors')
const helmet = require('helmet')
// const fs = require('fs')

const routes = require('./routes')

const isDev = process.env.NODE_ENV !== 'production'
const isProd = !isDev
// const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 3000
const customDomain = process.env.DOMAIN || 'localhost'

const app = next({ dev: isDev })

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 2 * 60 * 60 // 2 second
});

// const buildId = isProd
//   ? fs.readFileSync('./.next/BUILD_ID', 'utf8').toString()
// 	: null;

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
const getCacheKey = (req) => {
  return `${req.url}`;
};

const renderAndCache = ( req, res, pagePath, queryParams ) => {
  const key = getCacheKey(req);

  if (ssrCache.has(key) && !isDev) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  app.renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      if (isProd) {
        console.log(`CACHE MISS: ${key}`);
        ssrCache.set(key, html);
      }

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};

const routerHandler = routes.getRequestHandler(
  app,
  ({ req, res, route, query }) => {
    renderAndCache(req, res, route.page, query);
  }
);

app.prepare().then(() => {
	const server = express()
// gzip
	server.use(compression({ threshold: 0 }))
// cos domain
	server.use(
    cors({
      origin:
        customDomain.indexOf('http') !== -1 ? customDomain : `http://${customDomain}`,
      credentials: true
    })
	)
	server.use(helmet())

	server.get(`/favicon.ico`, (req, res) =>
    app.serveStatic(req, res, path.resolve('./static/img/favicon.ico'))
  )

  server.get('/static/*', (req, res) =>
    app.serveStatic(req, res, path.resolve(`./${req.url}`))
	)

	server.get('/react-loadable-manifest.json', (req, res) => {
		return app.serveStatic(req, res, path.resolve(`.next/${req.url}`))
	})

	server.get('/precache-manifest.*.js', (req, res) => {
		return app.serveStatic(req, res, path.resolve(`.next/${req.url}`))
	})

	server.get('/sw.js', (req, res) => {
		return app.serveStatic(req, res, path.resolve('./.next/sw.js'))
	})

  if (isProd) {

		server.get('/_next/server/*', (req, res) => {
			const strFolder = req.url.replace('/_next','/.next');
			return app.serveStatic(req, res, path.resolve(`./${strFolder}`))
		})

		server.get('/_next/static/*', (req, res) => {
			const strFolder = req.url.replace('/_next','/.next');
			return app.serveStatic(req, res, path.resolve(`./${strFolder}`))
		})

	}

	server.use(routerHandler)

	server.listen(PORT, err => {
    if (err) {
      console.error(err.message)
			throw err
    }
		console.log(`> App running on domain ${customDomain} and port ${PORT}`)
  });
})
