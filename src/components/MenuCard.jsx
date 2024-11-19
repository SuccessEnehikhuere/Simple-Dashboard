import React from 'react'

function MenuCard({image, title, width }) {
  return (
    <div className="">
      <img src={image} alt={title} className={`w-${width}  h-[234px] `} />
    </div>
  )
}

export default MenuCard