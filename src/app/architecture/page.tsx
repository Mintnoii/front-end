// import { BlogPosts } from '@/app/components/posts'
import {collectAllTags, getThinking } from '@/services/notion'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

// export default function Page() {
//   return (
//     <section>
//       <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
//       <BlogPosts />
//     </section>
//   )
// }


const NotePage = async () => {
  const posts = await getThinking()
  // console.log(posts,'posts')
  // const allTags = await collectAllTags(posts)

  return (
    <section className='max-w-xs w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
      <header>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Notes</h1>
        {/* <Title>Notes</Title> */}
        {/* <Description
        >
          This is where I write about programming, tech, life, and everything in
          between.
        </Description> */}
      </header>
      {/* <PostTable  posts={posts} /> */}
      {
        posts?.map((post) => (
          <Link
            key={post.id}
            className="flex flex-col space-y-1 mb-4"
            href={`/architecture/${post.name}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              {/* <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p> */}
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.name}
              </p>
            </div>
          </Link>
        ))
      }
  </section>
  )
}

export default NotePage