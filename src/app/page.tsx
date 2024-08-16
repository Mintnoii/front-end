import ProfileCard from '@/features/profile-card'
import LastPosts from '@/features/last-posts'
import CategoryCard from '@/features/category-card'
export default function Page() {
  return (
    <section className="flex-1 w-full h-full flex gap-6 relative page-wrapper py-6">
      <div className='flex flex-col gap-6'>
        <ProfileCard />
        <CategoryCard />
      </div>
      <div className='flex-1'>
        <LastPosts />
      </div>
    </section>
  )
}
