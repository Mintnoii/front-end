import { Card, CardBody } from "@nextui-org/react"
import { fetchPosts } from '@/services/notion'
import {group} from '@/shared'

export default async function ArchivePanel(context) {
  const allPosts = await fetchPosts()
  const postsGroupByYear = group(allPosts, i => i.last_edited_time.substring(0, 4))
  // console.log('postsGroupByYear',context, postsGroupByYear)
  const formatPosts = Object.entries(postsGroupByYear).sort((a, b) => Number(b[0]) - Number(a[0]))
  return (
    <Card>
      <CardBody>
    {
        formatPosts.map(([year,posts=[]]) => (
            <div>
                <div className="flex flex-row w-full items-center h-[60px]">
                    <div className="w-[20%] md:w-[15%] transition text-2xl font-bold text-right">{year}</div>
                    <div className="w-[20%] md:w-[15%]">
                        <div className="h-3 w-3 bg-none rounded-full outline outline-[var(--primary)] mx-auto -outline-offset-[2px] z-50 outline-3"></div>
                    </div>
                    <div className="w-[60%] md:w-[70%] transition text-left text-gray-500">{posts.length} Posts</div>
                </div>
                {posts.map(post => (
                    <a href={`/posts/${post.id}`}
                       aria-label={post.name}
                       className="group cursor-pointer btn-plain block h-10 w-full rounded-lg hover:text-[initial]"
                    >
                        <div className="flex flex-row justify-start items-center h-full">
                            <div className="w-[20%] md:w-[15%] transition text-sm text-right text-50">
                                {post.last_edited_time.substring(5)}
                            </div>
                            <div className="w-[20%] md:w-[15%] relative dash-line h-full flex items-center">
                                <div className="transition-all mx-auto w-2 h-2 rounded group-hover:h-5
                                group-hover:bg-primary
                                outline outline-2 z-50
                                bg-[#5d6080]
                                outline-transparent
                                "
                                ></div>
                            </div>
                            <div className="w-[65%] md:max-w-[60%] md:w-[60%] text-left font-bold
                                group-hover:translate-x-1 transition-all group-hover:text-primary
                                text-75 pr-8 whitespace-nowrap overflow-ellipsis overflow-hidden"
                            >
                              {post.name}
                            </div>
                            {/* <div className="hidden md:block md:w-[15%] text-left text-sm transition
                            whitespace-nowrap overflow-ellipsis overflow-hidden
                            text-30"
                            >{formatTag(post.tags)}</div> */}
                        </div>
                    </a>
                ))}
            </div>
        ))
    }
      </CardBody>
    </Card>
  )
}