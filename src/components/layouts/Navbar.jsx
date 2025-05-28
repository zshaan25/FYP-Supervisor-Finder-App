import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-50 via-indigo-200 to-blue-100 shadow-md rounded-xl p-4 mb-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo/Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-indigo-800 text-center sm:text-left">
          FYP Supervisor App
        </h1>

        {/* Navigation Links */}
        <nav className="mt-4 sm:mt-0">
          <ul className="flex justify-center sm:justify-end space-x-6">
            <li>
              <a
                href="/"
                className="text-indigo-800 hover:text-indigo-800 font-medium transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/supervisors"
                className="text-indigo-800 hover:text-indigo-800 font-medium transition duration-200"
              >
                Supervisors
              </a>
            </li>
            <li>
              <a
                href="/faculty"
                className="text-indigo-800 hover:text-indigo-800 font-medium transition duration-200"
              >
                Faculty
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-indigo-800 hover:text-indigo-800 font-medium transition duration-200"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
