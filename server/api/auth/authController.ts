import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { login } from './authService';

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.post('/login', async (ctx) => {
  const { email, password } = ctx.request.body as { email: string; password: string };
  try {
    const token = await login(email, password);
    ctx.body = { token };
  } catch (err) {
    const error = err as Error; 
    ctx.status = 401;
    ctx.body = { message: error.message };
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
