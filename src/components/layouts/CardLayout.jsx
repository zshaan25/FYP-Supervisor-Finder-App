import React from 'react'

const CardLayout = ({ children }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {children}
    </div>
  )
}

export default CardLayout