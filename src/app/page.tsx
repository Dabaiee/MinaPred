import { TopNav } from '@/components/TopNav'
import { MainContent } from '@/components/MainContent'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1018]">
      <TopNav />
      <MainContent />
    </main>
  )
}
