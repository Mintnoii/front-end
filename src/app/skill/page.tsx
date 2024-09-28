import { getPage } from '@/services/notion'
import {renderBlocks} from '@/widgets/block-render'

export default async function Blog() {
    const page = await getPage(process.env.NOTION_SKILL_PAGE_ID || '')
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