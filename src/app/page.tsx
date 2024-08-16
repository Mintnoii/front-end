import { LastPost } from '@/widgets/last-post'
import ProfileCard from '@/features/profile-card'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Front-end Fun
      </h1>
      <div className='flex'>
    <ProfileCard />
      </div>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
      页面仔的自娱自乐~
    </blockquote>
      <div className="my-8">
        <LastPost />
      </div>
    </section>
  )
}
