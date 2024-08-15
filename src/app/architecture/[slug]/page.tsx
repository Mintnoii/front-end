import {renderBlocks} from '@/widgets/block-render'
import {getThinking,getPage } from '@/services/notion'
// import { notFound } from 'next/navigation'
// import { baseUrl } from '@/app/sitemap'

export async function generateStaticParams() {
  const posts = await getThinking()
  return posts.map((post) => ({ slug: post.id}))
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug)
  console.log(params,'params',page)
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
}