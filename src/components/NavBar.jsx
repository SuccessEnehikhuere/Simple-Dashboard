import React from 'react'
import LinksDropdown from './LinksDropdown'
import icon1 from "@/assets/images/icon (2).svg"
import icon2 from '@/assets/images/icon (3).svg'
import ProfilePic from "@/assets/images/Avatar (1).svg"

function NavBar() {
  return (
    <nav className="py-4 sm:px-4 lg:px-20 px-4 flex justify-between lg:block items-center">
      <div className="">
        <LinksDropdown />
      </div>
      <div className="flex items-center justify-between">
        <div className="hidden sm:block">
          <p className="text-[#111827] font-bold text-[24px] leading-8">
            Hi, Taylor!
          </p>
          <p className="text-[#718096] font-normal text-[14px] leading-5">
            Let’s check your store today
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <input
            className="border border-[#D9D9D9] rounded-md bg-[#FAFAFA] py-2 px-4"
            placeholder="Search"
          /> 
          </div>
         
          <img src={icon1} alt="inbox" />
          <img src={icon2} alt="notification" />
          <div className="border border-[#EEEFF2] h-[40px] mr-6" />
          <div className="flex items-center">
            <img src={ProfilePic} alt="profile-pic" />
            <p
              className="text=[#111827] font-bold text-[16px] pl-4">
              Tynisha Obey
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar