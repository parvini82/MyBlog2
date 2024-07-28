import { db } from "./database";
import { PostUpdate, Post } from "./types";
import { sql } from "kysely";

// Existing function to find a post by ID
export async function findPostById(id: number) {
	return await db.selectFrom("posts").where("PostId", "=", id).selectAll().executeTakeFirst();
}

// Existing function to increment likes
export async function incrementLikes(id: number) {
	await db
		.updateTable("posts")
		.set({ Likes: sql`Likes + 1` })
		.where("PostId", "=", id)
		.execute();

	// Retrieve the updated post with the new like count
	const updatedPost = await findPostById(id);
	return updatedPost?.Likes;
}

// Other repository functions...
export async function updatePost(id: number, updateWith: PostUpdate) {
	await db.updateTable("posts").set(updateWith).where("PostId", "=", id).execute();
}

export async function getAllPosts() {
	const rows = await db.selectFrom("posts").selectAll().execute();
	return rows;
}

export async function deletePost(id: number) {
	const Post = await findPostById(id);

	if (Post) {
		await db.deleteFrom("posts").where("PostId", "=", id).execute();
	}

	return Post;
}
