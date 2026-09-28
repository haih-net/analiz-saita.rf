import { post1 } from './posts/Post1/data'
import { post2 } from './posts/Post2/data'
import type { Post } from './interfaces'

// The visible index and its structured data share the same publication list.
export const posts: Post[] = [post1, post2]
