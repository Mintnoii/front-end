import * as R from 'remeda'
import { IPost,  IStatus, IStatusName, IProject, IBlock, IBlockObjectResp,Loose } from '@/services/notion/types'
import {IPageObject,IRichTextItem, convertBlock} from "@tachikomas/notion-kit"

const formatTextRichText = (text_rich_text: IRichTextItem[]):string => {
  return text_rich_text.map(item => (item.text.content)).join('')
}

export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp)
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
  return formattedDate
}

export const formatProject = (page: IPageObject): IProject => {
  return {
    id: page.id,
    name: formatTextRichText(R.pathOr(page, ['properties', 'Name', 'title'], []) as IRichTextItem[]),
    cover: R.pathOr(page, ['cover', 'file', 'url'], '') as string,
    icon: R.pathOr(page, ['icon', 'file', 'url'], '') as string,
    github: R.pathOr(page, ['properties', 'github', 'url'], '') as string,
    status: (page.properties.Status as IStatus).status?.name as IStatusName,
    intro: formatTextRichText(R.pathOr(page, ['properties', 'intro', 'rich_text'], []) as IRichTextItem[]),
    last_edited_time: formatDate(page.last_edited_time),
    cover_url: R.pathOr(page, ['properties','cover_url', 'url'], '') as string,
  }
}
export const formatPageInfo = (page: IPageObject): IPost => {
  const category_name = (R.pathOr(page, ['properties','Category','select',],{}) as Loose)?.name || ''
  const tags = R.pathOr(page, ['properties', 'Tags', 'multi_select'], []) as Loose[]
  const publish_time = (R.pathOr(page, ['properties', 'Publish Time', 'date'],{}) as Loose)?.start
  // console.log(page,'page=====', publish_time)
  return {
    id: page.id,
    name: (R.pathOr(page, ['properties', 'Page', 'title'], []) as IRichTextItem[])?.[0]?.text?.content || '',
    cover: R.pathOr(page, ['cover', 'file', 'url'], '') as string,
    last_edited_time: publish_time || formatDate(page.last_edited_time),
    tags,
    category_name,
  }
}

// https://developers.notion.com/reference/block
export const formatContent = (block: IBlockObjectResp) => {
  const initBlock = convertBlock(block)
    return {
    ...initBlock,
      children: block.children
  } as IBlock
}