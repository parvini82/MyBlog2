import Koa from "koa";
import Router from "koa-router";
import cors from "@koa/cors";
import dotenv from "dotenv";
import * as PostRepository from "./PostRepository";
import * as UserRepository from "./UserRepository";
import { login } from "./auth/authService"; // Import the login service

const app = new Koa();
const router = new Router();

dotenv.config();
app.use(cors());

// Route to get all posts
router.get("/api/posts", async (ctx: Koa.Context) => {
	try {
		const posts = await PostRepository.getAllPosts();
		ctx.body = posts;
	} catch (error) {
		console.error("Error fetching posts:", (error as Error)?.message);
		ctx.status = 500;
		ctx.body = { error: "Internal Server Error" };
	}
});

// Route to get all users
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

// Route to like a post
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

interface LoginRequestBody {
	email: string;
	password: string;
  }

// Login route
router.post("/api/login", async (ctx: Koa.Context) => {
	const { email, password } = ctx.request.body as LoginRequestBody;
	try {
		const token = await login(email, password);
		ctx.body = { token };
	} catch (err) {
		console.error("Error during login:", (err as Error)?.message);
		ctx.status = 401;
		ctx.body = { error: "Invalid email or password" };
	}
});

// Apply routes and allowed methods
app.use(router.routes()).use(router.allowedMethods());

// Start server
const port = 8000;
app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
