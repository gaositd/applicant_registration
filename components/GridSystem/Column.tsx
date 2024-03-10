import React from 'react'

interface props {
  children: React.ReactNode;
}

const Column: React.FC<props> = ({ children }) => {
  return (
    <div
      className='grid h-full lg:grid-rows-12 md:grid-rows-4 sm:grid-rows-1 gap-10'
    >
      {children}
    </div>
  )
}

export default Column
