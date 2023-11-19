import {  Generated, Insertable, Selectable, Updateable } from 'kysely'

export interface Database {
    post: Posts
    
  }
  export interface Posts {
    
    PostId: Generated<number>
    Title:string
    Description:string
    Date:Date
    ReadTime:number
    ImgSrc:string
    ImgAlt:string
    Content:string
  
    // // You can specify a different type for each operation (select, insert and
    // // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
    // // wrapper. Here we define a column `created_at` that is selected as
    // // a `Date`, can optionally be provided as a `string` in inserts and
    // // can never be updated:
    // created_at: ColumnType<Date, string | undefined, never>
  }
export type Post = Selectable<Posts>
export type NewPost = Insertable<Posts>
export type PostUpdate = Updateable<Posts>