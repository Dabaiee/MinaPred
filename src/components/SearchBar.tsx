import { Button } from '@/components/ui/button'

export function SearchBar() {
  const categories = ['Top', 'New', 'Crypto Prices', 'Bitcoin', 'Airdrops', 'Ethereum', 'MicroStrategy', 'Stablecoins', 'Solana']

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search markets"
          className="flex-1 bg-[#0F1722] border border-gray-800 rounded-lg px-4 py-2 text-white"
        />
        <Button variant="outline">Competitive</Button>
      </div>
      
      <div className="flex space-x-2 overflow-x-auto">
        {categories.map((category) => (
          <Button
            key={category}
            variant="secondary"
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
} 