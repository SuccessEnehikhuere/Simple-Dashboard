import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AlignLeft } from 'lucide-react'
import { Button } from './ui/button'
import { menuItems } from '../../utils/SidebarMenu'


function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {menuItems.map((item) => {
          return (
            <DropdownMenuItem key={item.href}>
              <a href={item.href} className="flex items-center gap-x-2 ">
                <div className="flex  gap-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {item.secondaryIcon && <div>{item.secondaryIcon}</div>}
              </a>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown
