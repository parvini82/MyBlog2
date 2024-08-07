import jwt from 'jsonwebtoken';
import { Context, Next } from 'koa';

const SECRET_KEY = 'Palpali490';

export const authenticateToken = async (ctx: Context, next: Next) => {
  const token = ctx.headers['authorization']?.split(' ')[1];
  if (!token) {
    ctx.status = 401;
    ctx.body = { message: 'Access Denied' };
    return;
  }

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    ctx.state.user = verified;
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = { message: 'Invalid Token' };
  }
};
