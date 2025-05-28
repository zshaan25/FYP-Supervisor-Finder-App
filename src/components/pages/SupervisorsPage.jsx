import React, { useState } from "react";

const supervisorList = [
  { name: "Dr. Khurram Ijaz", expertise: "AI, Machine Learning" },
  { name: "Salman Irfan", expertise: "Web Development" },
  { name: "Dr. Shahid Yousuf", expertise: "Data Science" },
  { name: "Iqra Sabeen", expertise: "Cybersecurity" },
];

const Supervisors = () => {
  const [enrolled, setEnrolled] = useState([]);

  const handleEnroll = (name) => {
    if (!enrolled.includes(name)) {
      setEnrolled([...enrolled, name]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-200 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-4">
            Meet Your Future FYP Supervisor
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Explore and enroll with experts to guide your final year project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {supervisorList.map((sup, index) => (
            <div
              key={index}
              className="bg-purple-100  p-6 rounded-2xl shadow-lg border-t-4 border-indigo-400 transition transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4 space-x-4">
                <div className="bg-indigo-100 text-indigo-800 h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {sup.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {sup.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-indigo-700">
                      Expertise:
                    </span>{" "}
                    {sup.expertise}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleEnroll(sup.name)}
                disabled={enrolled.includes(sup.name)}
                className={`w-full mt-3 py-2 px-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  enrolled.includes(sup.name)
                    ? "bg-indigo-800 text-white cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md"
                }`}
              >
                {enrolled.includes(sup.name) ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Enrolled
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Enroll Now
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {enrolled.length > 0 && (
          <div className="mt-12 p-6 bg-white rounded-2xl border border-indigo-200 shadow-inner animate-fade-in">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-4 flex items-center">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Enrolled Supervisors
            </h3>
            <div className="flex flex-wrap gap-3">
              {enrolled.map((name, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-900 px-4 py-1 rounded-full text-sm flex items-center"
                >
                  {name}
                  <button
                    onClick={() =>
                      setEnrolled(enrolled.filter((n) => n !== name))
                    }
                    className="ml-2 text-indigo-500 hover:text-indigo-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Supervisors;
