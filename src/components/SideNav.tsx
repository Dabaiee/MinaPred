import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils"

export function SideNav() {
  const categories = [
    { name: 'Top', icon: '📈' },
    { name: 'New', icon: '🆕' },
    { name: 'Crypto Prices', icon: '💰' },
    { name: 'Bitcoin', icon: '₿' },
    { name: 'Airdrops', icon: '🪂' },
    { name: 'Ethereum', icon: 'Ξ' },
    { name: 'MicroStrategy', icon: '📊' },
    { name: 'Memecoins', icon: '🐕' },
    { name: 'Stablecoins', icon: '💵' },
    { name: 'Solana', icon: '◎' },
  ]

  return (
    <div className="w-64 bg-[#0F1722] p-4 space-y-4">
      <div className="space-y-2">
        <h3 className="text-gray-400 text-sm font-medium px-2">Sort by</h3>
        <Button variant="outline" className="w-full justify-start text-left">
          <span className="mr-2 w-6 text-center">📈</span> Trending
        </Button>
        <Button variant="outline" className="w-full justify-start text-left">
          <span className="mr-2 w-6 text-center">💧</span> Liquidity
        </Button>
        <Button variant="outline" className="w-full justify-start text-left">
          <span className="mr-2 w-6 text-center">📊</span> Volume
        </Button>
      </div>

      <div className="space-y-2">
        <h3 className="text-gray-400 text-sm font-medium px-2">Topics</h3>
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            className={cn(
              "w-full justify-start text-left text-gray-400 hover:text-white",
              "transition-colors duration-200"
            )}
          >
            <span className="mr-2 w-6 text-center">{category.icon}</span>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
} 