import { collectAllTags, fetchPosts } from '@/services/notion'
import Link from 'next/link'
import { group } from '@/shared'
import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default async function CategoryCard() {
  const posts = await fetchPosts()
  console.log(posts, 'posts', group(posts, p => p.category_name))
  const postsGroup = group(posts, p => p.category_name)
  // const allTags = await collectAllTags(posts)
  const categorys = Object.keys(postsGroup).map(category => ({ key: category, label: category }))
  console.log(postsGroup, 'postsGroup', categorys)
  // const categorys = [{key: 'all', label: 'All'}]
  return (
    <Card>
      <CardBody>
        <div className="text-md font-semibold mb-2 pl-1">Categories</div>
        {categorys
          .map((category) => (
            <Link
              key={category.key}
              className="space-y-1 block select-none rounded-md p-2  no-underline outline-none cursor-pointer transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              href={`/category/${category.key}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  {category.label}
              </div>
            </Link>
          ))}
      </CardBody>
    </Card>
  )
}
