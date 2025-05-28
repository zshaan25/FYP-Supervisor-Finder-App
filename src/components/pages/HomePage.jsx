import React, { useState } from "react";

const HomePage = () => {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-indigo-100 to-blue-200 p-8">
      <div className="max-w-5xl mx-auto text-center py-16 px-6">
        {/* Logo */}
        <div className="mb-12">
          <div className="bg-white shadow-2xl w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 border-4 border-indigo-300 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11 3a1 1 0 10-2 0v1a6 6 0 00-4.472 9.472l.73.73A4.992 4.992 0 007 19h6a4.992 4.992 0 001.742-9.798l.73-.73A6 6 0 0011 4V3z" />
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold text-indigo-800 drop-shadow-xl mb-4">
            Meet Your <span className="text-pink-600">Project Mentor</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Discover the right FYP supervisor for your dream project—powered by smart matchmaking and real profiles.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setShowHowItWorks(!showHowItWorks)}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Info Panel */}
        {showHowItWorks && (
          <div className="mt-12 bg-white border border-pink-300 rounded-2xl shadow-xl p-6 max-w-3xl mx-auto animate-fade-in text-left text-slate-700">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Let's Begin!
            </h2>
            <p className="mb-3">
              <strong>Step 1:</strong> Dive into our database of expert faculty.
            </p>
            <p className="mb-3">
              <strong>Step 2:</strong> Filter by research interest, availability, and connect.
            </p>
            <p className="mb-3">
              <strong>Step 3:</strong> Pitch your idea and kickstart the collaboration!
            </p>
            <p>
              It's your project — we just help you find the best guide to make it shine.
            </p>
          </div>
        )}

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Smart Discovery",
              desc: "Use filters and AI recommendations to find the best supervisor matches.",
              color: "bg-indigo-500",
            },
            {
              title: "Connect Fast",
              desc: "Instantly contact supervisors directly within the platform.",
              color: "bg-indigo-600",
            },
            {
              title: "Start Confident",
              desc: "Begin your FYP with full mentorship clarity and documented agreements.",
              color: "bg-purple-600",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all"
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
