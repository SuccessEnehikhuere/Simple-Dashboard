import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

const CustomerChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800">Customers</h2>
      <p className="text-sm text-gray-500 mb-6">
        Customers that buy our products
      </p>

      {/* Customer Chart */}
      <div className="relative w-48 h-28 mx-auto">
        <PieChart
          data={[
            { title: 'Current Customers', value: 70, color: '#7C3AED' },
            { title: 'New Customers', value: 30, color: '#10B981' },
          ]}
          lineWidth={20}
          startAngle={270} // Start from top
          rounded
          animate
          label={() => ''} // Disable default labels
        />
        {/* Center Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-2xl font-bold text-gray-900">82.3%</p>
          <p className="text-sm text-gray-500">Total</p>
        </div>
      </div>

      {/* Mini Charts */}
      <div className="flex justify-between mt-8">
        {/* Daily Customers */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <PieChart
              data={[
                { title: 'Daily', value: 18, color: '#7C3AED' },
                { title: 'Other', value: 82, color: '#E5E7EB' },
              ]}
              lineWidth={15}
              startAngle={270}
              rounded
              animate
              label={() => ''} // No label
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">+18%</p>
            <p className="text-xs text-gray-500">Daily customers</p>
          </div>
        </div>

        {/* Weekly Customers */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <PieChart
              data={[
                { title: 'Weekly', value: 14, color: '#10B981' },
                { title: 'Other', value: 86, color: '#E5E7EB' },
              ]}
              lineWidth={15}
              startAngle={270}
              rounded
              animate
              label={() => ''} // No label
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">+14%</p>
            <p className="text-xs text-gray-500">Weekly new customers</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
          <p className="text-sm text-gray-600">Current customers</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p className="text-sm text-gray-600">New customers</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerChart
