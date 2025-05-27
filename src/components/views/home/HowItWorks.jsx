import React from 'react'

const HowItWorks = () => {
  return (
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Filter by domain</li>
          <li>Check availability</li>
          <li>Bookmark supervisors</li>
          <li>View supervisor highlights</li>
        </ul>
      </section>
    );
  }

export default HowItWorks