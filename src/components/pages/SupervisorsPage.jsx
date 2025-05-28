import React, { useState } from "react";

const supervisorListData = [
  {
    name: "Dr. Khurram Ijaz",
    expertise: "AI, Machine Learning",
    status: "Available",
    maxSlots: 5,
    enrolledCount: 0,
  },
  {
    name: "Salman Irfan",
    expertise: "Web Development",
    status: "limited",
    maxSlots: 2,
    enrolledCount: 0,
  },
  {
    name: "Dr. Shahid Yousuf",
    expertise: "Data Science",
    status: "Available",
    maxSlots: 4,
    enrolledCount: 0,
  },
  {
    name: "Iqra Sabeen",
    expertise: "Cybersecurity",
    status: "Full",
    maxSlots: 5,
    enrolledCount: 5,
  },
];

const Supervisors = () => {
  const [supervisors, setSupervisors] = useState(supervisorListData);
  const [enrolled, setEnrolled] = useState([]);

  const handleRequestToggle = (supName) => {
    const updatedSupervisors = supervisors.map((sup) => {
      if (sup.name === supName) {
        const isAlreadyEnrolled = enrolled.includes(supName);

        if (isAlreadyEnrolled) {
          sup.enrolledCount -= 1;
          return sup;
        }

        if (sup.enrolledCount < sup.maxSlots) {
          sup.enrolledCount += 1;
          return sup;
        }
      }
      return sup;
    });

    setSupervisors(updatedSupervisors);

    if (enrolled.includes(supName)) {
      setEnrolled(enrolled.filter((name) => name !== supName));
    } else {
      setEnrolled([...enrolled, supName]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-900 mb-2">
            Supervisor Directory
          </h2>
          <p className="text-md text-gray-700 font-medium">
            Choose your guide and manage supervision requests smartly!
          </p>
        </div>

        <div className="space-y-6">
          {supervisors.map((sup, index) => {
            const isFull = sup.enrolledCount >= sup.maxSlots;
            const isEnrolled = enrolled.includes(sup.name);

            return (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-md border-l-4 border-indigo-400 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 h-14 w-14 rounded-full flex items-center justify-center text-indigo-700 font-bold text-lg">
                      {sup.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {sup.name}
                      </h3>
                      <p className="text-sm text-gray-600">{sup.expertise}</p>
                      <span
                        className={`inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-medium ${
                          isFull
                            ? "bg-red-100 text-red-600"
                            : sup.status === "Available"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {isFull ? "Full" : sup.status}
                      </span>
                      <p className="text-xs mt-1 text-gray-500">
                        Slots: {sup.enrolledCount}/{sup.maxSlots}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRequestToggle(sup.name)}
                    disabled={isFull && !isEnrolled}
                    className={`px-5 py-2 rounded-full text-sm font-semibold shadow-md transition duration-300 ${
                      isEnrolled
                        ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        : isFull
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {isEnrolled ? "Remove Request" : "Request Supervision"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {enrolled.length > 0 && (
          <div className="mt-10 p-6 bg-white border border-indigo-300 rounded-xl shadow-inner animate-fade-in">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Supervision Requested
            </h3>
            <ul className="list-disc list-inside text-indigo-700">
              {enrolled.map((name, index) => (
                <li key={index} className="my-1">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Supervisors;
