import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function TopNav() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-[#0F1722] border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold text-white">
          MinaPred
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-gray-400">
          Markets
        </Button>
        <Button variant="ghost" className="text-gray-400">
          Dashboard
        </Button>
        <Button variant="ghost" className="text-gray-400">
          Sports
        </Button>
        <Button variant="ghost" className="text-gray-400">
          Activity
        </Button>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">$0.00</span>
          <Button variant="outline" className="text-white">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  )
} 