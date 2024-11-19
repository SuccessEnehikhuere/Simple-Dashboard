import React from 'react'
import RevenueChart from '../../utils/RevenueChart'
import dots from '../assets/images/Frame 70.svg'
import ChartLinksDropdown from './ChartLinksDropdown'

function Chart() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="lg:w-1/2 w-full pb-20 pt-6 bg-white rounded-md shadow-md">
        <div className="flex justify-between pb-10 border-b border-[#E6E8F0] px-6">
          <p className="text-[18px] text-[#081735] font-bold">Revenue</p>

          {/* Dropdown Menu Trigger */}
          <ChartLinksDropdown>
            <img src={dots} alt="dots" className="cursor-pointer" />
          </ChartLinksDropdown>
        </div>
        <h3 className="px-6 text-[32px] text-[#081735] font-bold pt-[20px] pb-8">
          $112,340
        </h3>
        <div className="px-6">
          <RevenueChart />
        </div>
      </div>
      <div className="lg:w-1/2 w-full">{/* <CustomerChart /> */}</div>
    </div>
  )
}

export default Chart
