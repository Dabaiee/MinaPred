"use client"

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SearchBar } from '@/components/SearchBar'
import { SideNav } from '@/components/SideNav'
import { MarketList } from '@/components/MarketList'
import { cn } from "@/lib/utils"

export function MainContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex relative">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        className="md:hidden fixed bottom-4 right-4 z-20 bg-[#0F1722]"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-10",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <SideNav />
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-6">
        <div className="mb-4">
          <SearchBar />
        </div>
        <MarketList />
      </div>
    </div>
  )
} 