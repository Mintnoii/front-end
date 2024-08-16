import { collectAllTags, fetchPosts } from '@/services/notion'
import Link from 'next/link'
import { group } from '@/shared'
import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default async function CategoryCard() {
  const posts = await fetchPosts()
  console.log(posts, 'posts', group(posts, p => p.category_name))
  const postsGroup = group(posts, p => p.category_name)
  // const lastPosts = posts.filter((post) => Object.keys(categoryNameMap).includes(post.category_name))
  // const allTags = await collectAllTags(posts)
  const categorys = Object.keys(postsGroup).map(category => ({ key: category, label: category }))
  console.log(postsGroup, 'postsGroup', categorys)
  return (
    <Card>
      <CardBody>
        <div>Categories</div>
        {categorys
          .map((category) => (
            <Link
              key={category.key}
              className="flex flex-col space-y-1 mb-4"
              href={`/category/${category.key}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {category.label}
                </p>
              </div>
            </Link>
          ))}
        
      </CardBody>
    </Card>
  )
}
