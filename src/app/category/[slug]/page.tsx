import {fetchPosts } from '@/services/notion'
import Link from 'next/link'

export const metadata = {
  title: 'Category',
  description: '前端哪来的架构？',
}

// export async function getServerSideProps({ req, query }) {
//   const authHeader = req.getHeaders()['authorization'];
//   const theme = req.cookies['theme'];
 
//   return { props: { ... }}
// }

const NotePage = async (context) => {
  console.log(context,'context')
  const {slug} = context.params || {}
  const category = decodeURIComponent(slug)
  const posts = await fetchPosts({category})
  console.log(posts,'posts')
  // const allTags = await collectAllTags(posts)

  return (
    <section className='max-w-xs w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
      <header>
        <h1 className="font-semibold text-2xl mt-8 mb-8 tracking-tighter">{category}</h1>
      </header>
      {
        posts?.map((post) => (
          <Link
            key={post.id}
            className="flex flex-col space-y-1 mb-4"
            href={`/architecture/${post.id}`}
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