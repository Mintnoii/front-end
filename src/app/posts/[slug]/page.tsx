import {renderBlocks} from '@/widgets/block-render'
import { getPage } from '@/services/notion'
// import { notFound } from 'next/navigation'
// import { baseUrl } from '@/app/sitemap'

export default async function Blog({ params }: { params: { slug: string } }) {
  // console.log(context,'context')
  const page = await getPage(params.slug)
  return (
    <div className="flex justify-center w-full relative">
      <div className='content-wrapper pb-10 prose'>
      {/* {JSON.stringify(params)} */}
      <div className="transition font-bold block dark:text-white/90 mb-3 md:before:w-1 md:text-[2.5rem]/[2.75rem] text-2xl text-black/90 w-full">{page.name}</div>
       {renderBlocks(page.content)}
      </div>
      {/* <Outline content={page.content} /> */}
    </div>
  )
}