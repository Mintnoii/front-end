import {renderBlocks} from '@/widgets/block-render'
import { getPage } from '@/services/notion'
// import { notFound } from 'next/navigation'
// import { baseUrl } from '@/app/sitemap'

export default async function Blog({ params }: { params: { slug: string } }) {
  // console.log(context,'context')
  const page = await getPage(params.slug)
  console.log(params,'params',page)
  return (
    <div className="flex relative">
      <div className='content-wrapper pb-10 prose'>
      {/* {JSON.stringify(params)} */}
      <h1>{page.name}</h1>
       {renderBlocks(page.content)}
      </div>
      {/* <Outline content={page.content} /> */}
    </div>
  )
}