

const koa = require('koa');
const app = new koa();
const static = require('koa-static');

var views = require('koa-views');
var Router = require('koa-router');
var router = new Router();

app.use(views(__dirname + '/views', {
  map: { html: 'nunjucks' }
}));

app.use(static(__dirname + '/views'));

router.get('/', async (ctx, next) => {
  ctx.body = ' this is the first page u see.';
});

router.get('/kikii', async ( ctx, next ) => {
  return ctx.render('index'); 
});

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000);

