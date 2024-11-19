import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Ensure this is correctly imported
import { optionsList } from "../../utils/Menu";

function ChartLinksDropdown({ children }) {
  return (
    <DropdownMenu>
      {/* Trigger wraps the child element */}
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52"
        align="start"
        sideOffset={25}
      >
        {optionsList.map((item) => (
          <DropdownMenuItem key={item.href}>
            <div className="flex items-center gap-x-2 hover:text-red-500 group">
              <div className="flex gap-3 items-center">
                {/* Image hover effect */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
                {/* Text hover effect */}
                <span className="group-hover:text-red-500">{item.title}</span>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ChartLinksDropdown;
