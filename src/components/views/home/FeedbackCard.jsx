import React from 'react'

const FeedbackCard = ({ studentName, feedback, year }) => {
  return (
    <div className="bg-indigo-50 p-4 rounded shadow mb-3">
      <p className="italic text-gray-700">"{feedback}"</p>
      <div className="mt-2 text-sm text-indigo-600 font-medium">
        — {studentName}, {year}
      </div>
    </div>
  );
}

export default FeedbackCard