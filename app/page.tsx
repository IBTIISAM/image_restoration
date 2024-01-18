import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import EnhancedViewer from '@/components/enhancedViewer'

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <div className="flex flex-row"> 
        <Sidebar></Sidebar>
        <EnhancedViewer></EnhancedViewer>
      </div>
    </main>
  )
}
