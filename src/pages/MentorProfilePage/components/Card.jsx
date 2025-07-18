import React from 'react'

const Card = ({ children, padding = 'p-5' }) => {
  return (
    <div className={`w-full max-w-xs rounded-2xl shadow-md border border-[3.5px] border-[#2D488F] ${padding}`} >
        {children}
    </div>
  )
}

export default Card