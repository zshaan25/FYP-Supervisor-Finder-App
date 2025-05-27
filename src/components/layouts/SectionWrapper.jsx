import React from 'react'

const SectionWrapper = ({ title, children }) => {
  return (
    <section className="p-6 bg-white shadow-lg rounded-lg my-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">{title}</h2>
      {children}
    </section>
  )
}

export default SectionWrapper