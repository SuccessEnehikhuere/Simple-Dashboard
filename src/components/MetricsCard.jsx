import React from 'react'

function MetricsCard({image, title, value}) {
  return (
    <div className="bg-[#F8F9FB] shadow-md rounded-lg p-8 flex flex-col ">
      <img src={image} alt={title} className="w-12 h-12 mb-4" />{' '}
      <h3 className="text-[#64748B] text-sm mb-2">{title}</h3>
      <p
        className=" text-[#1E293B] text-3xl font-semibold"
      >
        {value}
      </p>
    </div>
  )
}

export default MetricsCard