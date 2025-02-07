import { Button } from '@/components/ui/button'
import { Bitcoin, Coins, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface PriceOption {
  price: string
  probability: string
}

interface MarketCard {
  title: string
  price?: string        // 改为可选属性
  volume: string
  endDate: string
  type: 'single' | 'multiple'
  icon: 'bitcoin' | 'ethereum' | 'dollar' | 'trending'
  probability?: string // 用于单选卡片
  priceOptions?: PriceOption[] // 用于多选卡片
}

export function MarketList() {
  const markets: MarketCard[] = [
    {
      title: "What price will Bitcoin hit in February?",
      price: "$200,000",
      volume: "$12k",
      endDate: "Monthly",
      type: "single",
      icon: "bitcoin",
      probability: "65%"
    },
    {
      title: "Bitcoin price milestones by March 31?",
      volume: "$24k",
      endDate: "Weekly",
      type: "multiple",
      icon: "bitcoin",
      priceOptions: [
        { price: "$100,000", probability: "75%" },
        { price: "$150,000", probability: "45%" },
        { price: "$200,000", probability: "25%" },
        { price: "$250,000", probability: "15%" },
        { price: "$300,000", probability: "5%" }
      ]
    },
    {
      title: "Ethereum all time high by June 30?",
      price: "$10,000",
      volume: "$24k",
      endDate: "Weekly",
      type: "single",
      icon: "ethereum"
    },
    {
      title: "XRP all time high by when?",
      price: "$4.50",
      volume: "$8k",
      endDate: "Monthly",
      type: "multiple",
      icon: "dollar"
    },
    {
      title: "Will MicroStrategy hold 500k+ BTC before March?",
      price: "$0.74",
      volume: "$55k",
      type: "single",
      endDate: "Monthly",
      icon: "trending"
    },
    {
      title: "Solana all time high by March 31?",
      price: "$350",
      volume: "$32k",
      type: "single",
      endDate: "Monthly",
      icon: "trending"
    },
    {
      title: "Bitcoin above $105,000 on February 7?",
      price: "$0.25",
      volume: "$18k",
      type: "single",
      endDate: "Weekly",
      icon: "bitcoin"
    }
  ]

  const getIcon = (iconName: MarketCard['icon']) => {
    switch (iconName) {
      case 'bitcoin':
        return <Bitcoin className="w-5 h-5" />
      case 'ethereum':
        return <Coins className="w-5 h-5" />
      case 'dollar':
        return <DollarSign className="w-5 h-5" />
      case 'trending':
        return <TrendingUp className="w-5 h-5" />
    }
  }

  const getProbabilityColor = (probability: string) => {
    const value = parseInt(probability)
    return value >= 50 ? "text-green-400" : "text-red-400"
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {markets.map((market, index) => (
        <div
          key={index}
          className="bg-[#0F1722] rounded-lg px-2.5 py-4 border border-gray-800 hover:border-gray-700 transition-colors duration-200 h-[280px]"
        >
          <div className="flex items-start space-x-2 mb-3">
            <div className="text-gray-400 mt-1">
              {getIcon(market.icon)}
            </div>
            <h3 className="text-white font-medium text-sm">{market.title}</h3>
          </div>
          
          {market.type === 'single' ? (
            // 单选卡片
            <div className="mt-3">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="text-xl text-white">{market.price}</div>
                  <div className="text-xs text-gray-400 flex items-center">
                    Vol: {market.volume} • {market.endDate}
                  </div>
                </div>
                <span className={cn("text-sm", getProbabilityColor(market.probability!))}>
                  {market.probability}
                </span>
              </div>
              <div className="flex space-x-1.5">
                <Button variant="default" className="flex-1 bg-green-600 hover:bg-green-700 h-7 text-sm">
                  Buy Yes
                </Button>
                <Button variant="default" className="flex-1 bg-red-600 hover:bg-red-700 h-7 text-sm">
                  Buy No
                </Button>
              </div>
            </div>
          ) : (
            // 多选卡片
            <div className="mt-3 h-[200px] overflow-y-auto pr-1 custom-scrollbar">
              <div className="space-y-2">
                {market.priceOptions?.map((option, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">{option.price}</span>
                      <span className={cn("text-sm", getProbabilityColor(option.probability))}>
                        {option.probability}
                      </span>
                    </div>
                    <div className="flex space-x-1.5">
                      <Button variant="default" className="flex-1 bg-green-600 hover:bg-green-700 h-6 text-xs">
                        Yes
                      </Button>
                      <Button variant="default" className="flex-1 bg-red-600 hover:bg-red-700 h-6 text-xs">
                        No
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 