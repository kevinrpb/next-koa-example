const Router = require('koa-router');

const apiV1 = require('./api/v1');

module.exports = app => {
	const router = new Router();
	const handle = app.getRequestHandler();

	router.use('/api/v1', apiV1.routes(), apiV1.allowedMethods());

	router.get('*', async ctx => {
		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});

	return router;
};
