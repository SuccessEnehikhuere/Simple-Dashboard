import React from 'react'
import Logo from '../assets/images/logo.svg'
import CloseButton from '../assets/images/Button Close.svg'
import ProgressCircle from '../assets/images/Progress circle.svg'
import { menuItems } from '../../utils/SidebarMenu'

function SideBar() {
  return (
    <aside className="py-4 px-8 h-full flex flex-col">
      {/* Logo */}
      <img src={Logo} alt="logo" className="mx-auto pt-4" />

      {/* Menu Items */}
      <div className="flex flex-col flex-grow mt-14 gap-y-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-center justify-between px-4 py-2 hover:bg-[#6C5DD3] rounded-lg text-[#8F95B2] text-[16px]"
          >
            {/* Primary Icon and Name */}
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.name}</span>
            </div>
            {/* Secondary Icon (if it exists) */}
            {item.secondaryIcon && <div>{item.secondaryIcon}</div>}
          </a>
        ))}
      </div>

      {/* Subscription Section */}
      <div className=" bg-[#F8F9FB] flex flex-col mt-28 rounded-md">
        <div className="flex justify-between relative">
          <img src={ProgressCircle} className="p-4" />
          <img src={CloseButton} className="absolute left-36" />
        </div>
        <div className="rounded-lg p-4">
          <p className="text-[15px] font-[600] text-[#272D37] leading-6">
            Subscription Plan
          </p>
          <p className="text-[15px] text-[#5F6D7E] leading-5">
            Your subscription plan will expire soon. Please upgrade!
          </p>

          <button className="mt-3 self-start px-6 py-2 text-[#6C5DD3] rounded">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
