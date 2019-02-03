const Router = require('koa-router');

const router = new Router();

router.get('/json', async ctx => {
	const { n } = ctx.query;
	let N = parseInt(n, 10);
	if (!N || typeof N !== 'number') N = 1;

	let arr = [];

	for (let i = 0; i < N; i++) {
		arr.push({
			title: 'Default Title',
			number: i,
		});
	}

	ctx.status = 200;
	ctx.body = arr;
});

router.get('/json/:id', async ctx => {
	ctx.status = 200;
	ctx.body = [
		{
			title: `Title for id: ${ctx.params.id}`,
			number: Math.floor(Math.random() * 10),
		},
	];
});

module.exports = router;
