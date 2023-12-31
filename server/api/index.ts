import Koa from "koa";
import Router from "koa-router";
import mysql from "mysql2/promise";
import cors from "@koa/cors";
import dotenv from "dotenv";
import { sql } from 'kysely'
import { db } from './database'
import * as PostRepository from "./PostRepository";
import * as UserRepository from "./UserRepository"

const app = new Koa();
const router = new Router();

dotenv.config();

// Use the CORS middleware
app.use(cors());
// Database connection configuration
/* const connectionConfig: mysql.PoolOptions = {

  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_DATABASE ,
}; */


// API endpoint to fetch posts
router.get("/api/posts", async (ctx: Koa.Context) => {
	try {
		// const connection = await mysql.createPool(connectionConfig);
		const Posts = await PostRepository.getAllPosts();
		// const [rows] = await connection.execute("SELECT * FROM Posts");
		ctx.body = Posts;
	} catch (error) {
		console.error("Error fetching posts:", (error as Error)?.message);
		ctx.status = 500;
		ctx.body = { error: "Internal Server Error" };
	}
});
/* router.get("/api/users", async (ctx: Koa.Context) => {
	try {
		const connection = await mysql.createPool(connectionConfig);
		// const Posts = PostRepository.getAllPosts();
		const [rows] = await connection.execute("SELECT * FROM users");
		ctx.body = rows;
	} catch (error) {
		console.error("Error fetching posts:", (error as Error)?.message);
		ctx.status = 500;
		ctx.body = { error: "Internal Server Error" };
	}
}); */
router.get("/api/users", async (ctx: Koa.Context) => {
	try {
		const users = await UserRepository.getAllUsers();
		ctx.body = users;

	} catch (error) {
		console.error("Error fetching users:", (error as Error)?.message);
		ctx.status = 500;
		ctx.body = { error: "Internal Server Error" };
	}
});


app.use(router.routes())
	.use(router.allowedMethods());

const port = 8000;
app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
