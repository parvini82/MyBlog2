import { db } from './database'
import { PostUpdate, Post } from './types'

export async function findPostById(id: number) {
    return await db.selectFrom('post')
      .where('PostId', '=', id)
      .selectAll()
      .executeTakeFirst()
  }
  export async function findPeople(criteria: Partial<Post>) {
    let query = db.selectFrom('post')
  
    if (criteria.PostId) {
      query = query.where('PostId', '=', criteria.PostId) // Kysely is immutable, you must re-assign!
    }
  
    if (criteria.Title) {
      query = query.where('Title', '=', criteria.Title)
    }
  
    if (criteria.Description !== undefined) {
      query = query.where(
        'Description', 
        criteria.Description === null ? 'is' : '=', 
        criteria.Description
      )
    }
  
    if (criteria.Date) {
      query = query.where('Date', '=', criteria.Date)
    }
  
    if (criteria.ReadTime) {
      query = query.where('ReadTime', '=', criteria.ReadTime)
    }
    if (criteria.ImgSrc) {
        query = query.where('ImgSrc', '=', criteria.ImgSrc)
      }
      if (criteria.ImgAlt) {
        query = query.where('ImgAlt', '=', criteria.ImgAlt)
      }
      if (criteria.Content) {
        query = query.where('Content', '=', criteria.Content)
      }
  
    return await query.selectAll().execute()
  }
  
  export async function updatePost(id: number, updateWith: PostUpdate) {
    await db.updateTable('post').set(updateWith).where('PostId', '=', id).execute()
  }
  export async function getAllPosts() {
    const [rows] = await db.selectFrom('post').selectAll('post').execute();
    return rows;
  }

//   export async function createPost(Post: NewPost) {
//     const { insertId } = await db.insertInto('post')
//       .values(Post)
//       .executeTakeFirstOrThrow()
        
//     return await findPostById(insertId)
//   }
  
  export async function deletePost(id: number) {
    const Post = await findPostById(id)
  
    if (Post) {
      await db.deleteFrom('post').where('PostId', '=', id).execute()
    }
  
    return Post
  }