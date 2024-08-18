import ProfileCard from '@/features/profile-card'
import CategoryCard from '@/features/category-card'
import ArchivePanel from '@/features/archive-panel'
export default function Page() {
  // const posts = await fetchPosts()
  return (
    <section className="flex-1 w-full h-full flex gap-6 relative page-wrapper pt-8 pb-6">
      <div className='flex flex-col gap-6'>
        <ProfileCard />
        <CategoryCard />
      </div>
      <div className='flex-1'>
        <ArchivePanel />
      </div>
    </section>
  )
}
