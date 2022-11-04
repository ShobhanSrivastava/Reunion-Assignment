import React from 'react'

const ListingDetail = ({icon, number, unit, sup}) => {
  return (
    <div className="flex space-x-1 items-center text-gray-500 font-bold">
        <span className="material-symbols-rounded text-[#7065F0]">{icon}</span>
        <p className="text-xs">{Math.floor(number)} {unit}<sup>{sup}</sup></p>
    </div>
  )
}

export default ListingDetail