import React from 'react'
import { customersList } from '../../utils/Menu'

function Customers() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Customers List</h3>
      <ul className="space-y-3">
        {customersList.map((customer, index) => (
          <li key={index} className="flex ">
            <img
              src={customer.image}
              alt={customer.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{customer.name}</p>
              <p className="text-sm text-gray-500">{customer.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Customers