import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import {renderBlocks} from '@/widgets/block-render'
import {getThinking,getPage } from '@/services/notion'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getThinking()
  return posts.map((post) => ({ slug: post.id}))
}

export const Page = async ({ params }) => {
   console.log(params,'params')
     const page = await getPage(params.slug)

  return (
    <div className="flex relative">
      <div className='content-wrapper pb-10 prose'>
      {/* {JSON.stringify(params)} */}
      {/* <Title>{page.name}</Title> */}
       {renderBlocks(page.content)}
      </div>
      {/* <Outline content={page.content} /> */}
    </div>
  )
  // ...
}
export default Page
