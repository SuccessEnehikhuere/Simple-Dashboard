import React from 'react'
import MetricsCard from './MetricsCard'
import { metrics } from '../../utils/Menu'
import Chart from './Chart'
import CustomerMap from './CustomerMap'
import MenuCard from './MenuCard'
import burger1 from '../assets/images/burger.png'
import burger2 from '../assets/images/burger2.png'
import burger3 from '../assets/images/burger3.png'
import burger4 from '../assets/images/burger4.png'
import burger5 from '../assets/images/burger5.png'
import burger6 from '../assets/images/burger6.png'

function Main() {
  return (
    <main className="flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 items-center align-middle pb-8">
        {metrics.map((metric, index) => (
          <MetricsCard
            key={index}
            title={metric.title}
            value={metric.value}
            image={metric.image}
          />
        ))}
      </div>

      <Chart />
      <CustomerMap />

      <div className="bg-white shadow-md rounded-md">
        <div className="flex justify-between border-b border-[#E6E8F0]">
          <div className="p-4">
            <p className=" text-[#081735]text-[18px] font-bold">Menu</p>
          </div>
          <div className="flex gap-x-6 text-[#5F6D7E] text-[15px] font-medium pt-6 pb-[-12] px-8">
            <p className="border-b-2 border-purple-700">All Category</p>
            <p className="hover:border-b-2 hover:border-purple-700">
              Breakfast
            </p>
            <p className="hover:border-b-2 hover:border-purple-700 hover">
              Lunch
            </p>
            <p className="hover:border-b-2 hover:border-purple-700 hover">
              Dinner
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:flex-row gap-x-4 p-4">
          <MenuCard
            image={burger1}
            title="Surf & Turf Gift Basket"
            width="656px"
          />
          <MenuCard
            image={burger2}
            title="Surf & Turf Gift Basket"
            width="379px"
          />
        </div>
        <div className="grid grid-cols-2 lg:flex gap-x-4 p-4">
          <MenuCard
            image={burger3}
            title="Surf & Turf Gift Basket"
            width="258px"
          />
          <MenuCard
            image={burger4}
            title="Surf & Turf Gift Basket"
            width="258px"
          />
          <MenuCard
            image={burger5}
            title="Surf & Turf Gift Basket"
            width="258px"
          />
          <MenuCard
            image={burger6}
            title="Surf & Turf Gift Basket"
            width="258px"
          />
        </div>
      </div>
    </main>
  )
}

export default Main
