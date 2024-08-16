import {collectAllTags, getThinking } from '@/services/notion'
import Link from 'next/link'
import {CategoryMap} from '@/config'
import { invert } from '@/shared'

export const metadata = {
  title: 'LastPost',
  description: '最后发表的文章',
}

const LastPost = async () => {
  const posts = await getThinking()
  const categoryNameMap = invert(CategoryMap)
  const lastPosts = posts.filter((post) => Object.keys(categoryNameMap).includes(post.category_name))
  // console.log(posts,'posts')
  // const allTags = await collectAllTags(posts)
return (
    <section>
      {lastPosts
        .sort((a, b) => {
          if (
            new Date(a.last_edited_time) > new Date(b.last_edited_time)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.id}
            className="flex flex-col space-y-1 mb-4"
            href={`/${categoryNameMap[post.category_name]}/${post.id}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {post.last_edited_time}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.name}
              </p>
            </div>
          </Link>
        ))}
    </section>
  )
}

export {LastPost}