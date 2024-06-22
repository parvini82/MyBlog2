import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
	posts: Posts;
	users:Users;
}
export interface Posts {
	PostId: Generated<number>;
	Title: string;
	Description: string;
	Date: Date;
	ReadTime: number;
	ImgSrc: string;
	ImgAlt: string;
	Likes:number;
	Content: string;

}
export interface Users{
	UserId:number;
	Email:string;
	Password:string;
	AccessLevel:number;
}
export type Post = Selectable<Posts>;
export type NewPost = Insertable<Posts>;
export type PostUpdate = Updateable<Posts>;
