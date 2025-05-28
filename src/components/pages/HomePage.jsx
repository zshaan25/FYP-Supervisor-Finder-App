import React, { useState } from "react";

const HomePage = () => {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-200 p-8">
      <div className="max-w-5xl mx-auto text-center py-16 px-6">
        {/* Logo */}
        <div className="mb-12">
          <div className="bg-white shadow-lg w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold text-indigo-900 drop-shadow-lg mb-4">
            Find Your{" "}
            <span className="text-purple-700">FYP Supervisor</span>
          </h1>
          <p className="text-lg text-slate-800 max-w-2xl mx-auto font-medium">
            Explore academic profiles and connect with expert mentors to guide
            your Final Year Project from start to finish.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setShowHowItWorks(!showHowItWorks)}
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg border border-indigo-500 hover:bg-indigo-100 transition-transform transform hover:scale-105 shadow"
          >
            How It Works
          </button>
        </div>

        {/* Modal */}
        {showHowItWorks && (
          <div className="mt-12 bg-white border-2 border-indigo-400 rounded-xl shadow-2xl p-6 max-w-3xl mx-auto animate-fade-in text-left text-slate-700">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              How It Works
            </h2>
            <p className="mb-3">
              <strong>1. Explore:</strong> Browse profiles based on your
              interests and FYP area.
            </p>
            <p className="mb-3">
              <strong>2. Connect:</strong> Contact supervisors and send them a
              project request.
            </p>
            <p className="mb-3">
              <strong>3. Collaborate:</strong> Once matched, start working
              together toward your FYP success.
            </p>
            <p>
              This platform bridges students with expert mentors in just a few
              clicks.
            </p>
          </div>
        )}

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Explore Profiles",
              desc: "Browse through detailed supervisor profiles including expertise and availability.",
              color: "bg-purple-500",
            },
            {
              title: "Send Request",
              desc: "Reach out to supervisors aligned with your FYP goals and ideas.",
              color: "bg-blue-600",
            },
            {
              title: "Start Your Project",
              desc: "Begin your final year project with the right mentor at your side.",
              color: "bg-indigo-600",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all"
            >
              <div
                className={`h-12 w-12 rounded-full ${step.color} text-white flex items-center justify-center text-lg font-bold mx-auto mb-4`}
              >
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-slate-600 text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
