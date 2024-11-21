import React from 'react'
import LinksDropdown from './LinksDropdown'
import icon1 from '@/assets/images/Icon (2).svg'
import icon2 from '@/assets/images/Icon (3).svg'
import ProfilePic from '@/assets/images/Avatar (1).svg'
import { FaSearch } from 'react-icons/fa'

function NavBar() {
  return (
    <nav className="py-4 px-2 sm:px-8 lg:px-16 flex justify-between lg:block items-center bg-white">
      <div className="">
        <LinksDropdown />
      </div>
      <div className="flex items-center justify-between">
        <div className="hidden lg:block">
          <p className="text-[#111827] font-bold text-[24px] leading-8">
            Hi, Taylor!
          </p>
          <p className="text-[#718096] font-normal text-[14px] leading-5">
            Let’s check your store today
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

            <input
              className="border border-[#D9D9D9] rounded-md bg-[#FAFAFA] py-[4px] md:py-2 pl-8 md:pl-12 md:px-4"
              placeholder="Search"
            />
          </div>

          <img
            src={icon1}
            alt="inbox"
            className="w-10 h-10 md:w-[48px] md:h-[48px]"
          />
          <img
            src={icon2}
            alt="notification"
            className="w-10 h-10 md:w-[48px] md:h-[48px]"
          />

          <div className="border border-[#EEEFF2] h-[40px] mr-4 md:mr-6" />
          <div className="flex items-center">
            <img
              src={ProfilePic}
              alt="profile-pic"
              className="w-8 h-8 md:w-[48px] md:h-[48px]"
            />
            <p className="text=[#111827] font-bold text-sm md:text-[16px] pl-4">
              Tynisha Obey
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
