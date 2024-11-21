import React from 'react'
import RevenueChart from '../../utils/RevenueChart'
import dots from '../assets/images/Frame 70.svg'
import ChartLinksDropdown from './ChartLinksDropdown'
import SmallChart from '@/components/SmallChart'
import SmallDoughnutChart from '@/components/SmallDoughnutChart'
import DoughnutChart, { DoughnutChartLabels } from './DoughnutChart'

function Chart() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="lg:w-1/2 w-full pb-20 pt-6 bg-white rounded-md shadow-md">
        <div className="flex justify-between pb-6 border-b border-[#E6E8F0] px-6">
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
      
      <div className="lg:w-1/2 w-full bg-white rounded-md shadow-md ">
        <div className="flex justify-between pb-2 border-b border-[#E6E8F0] px-6">
          <div className='pt-6'>
            <p className="text-[18px] text-[#081735] font-bold">Customers</p>
            <p className="text-[#8F95B2] text-[12px] ">
              Customers that buy our products
            </p>
          </div>

          {/* Dropdown Menu Trigger */}
          <ChartLinksDropdown>
            <img src={dots} alt="dots" className="cursor-pointer" />
          </ChartLinksDropdown>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row pt-6 lg:pt-8">
            <DoughnutChart />

            <div className="flex flex-col gap-4 lg:pt-12">
              <SmallDoughnutChart />
              <SmallChart />
            </div>
          </div>
          <div className="pb-8 ">
            <DoughnutChartLabels />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
