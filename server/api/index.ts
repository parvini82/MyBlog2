import Koa from "koa";
import Router from "koa-router";
import cors from "@koa/cors";
import dotenv from "dotenv";
import * as PostRepository from "./PostRepository";
import * as UserRepository from "./UserRepository";

const app = new Koa();
const router = new Router();

dotenv.config();

app.use(cors());

router.get("/api/posts", async (ctx: Koa.Context) => {
	try {
		const Posts = await PostRepository.getAllPosts();
		ctx.body = Posts;
	} catch (error) {
		console.error("Error fetching posts:", (error as Error)?.message);
		ctx.status = 500;
		ctx.body = { error: "Internal Server Error" };
	}
});

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

router.post("/api/posts/:id/like", async (ctx: Koa.Context) => {
	try {
		const postId = parseInt(ctx.params.id);
		const newLikesCount = await PostRepository.incrementLikes(postId);
		ctx.status = 200;
		ctx.body = { message: "Like updated successfully", likes: newLikesCount };
	} catch (error) {
		console.error("Error updating like:", (error as Error)?.message);
		ctx.status = 500;
		ctx.body = { error: "Internal Server Error" };
	}
});

app.use(router.routes()).use(router.allowedMethods());

const port = 8000;
app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
