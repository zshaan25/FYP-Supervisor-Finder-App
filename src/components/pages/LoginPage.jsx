import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-200 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/30 rounded-2xl shadow-2xl p-8 sm:p-10 border border-white/20">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-white/40 shadow-inner mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-black drop-shadow-lg">
            Welcome back
          </h2>
          <p className="mt-2 text-white/80">Sign in to your account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/90"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="py-3 px-4 w-full rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 shadow-inner focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/90"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="py-3 px-4 w-full rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 shadow-inner focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-white/80">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 rounded border-gray-300 mr-2"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-black-100 hover:text-white font-medium"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105 duration-200 ease-in-out"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6">
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-white/50"></div>
            <span className="absolute bg-white/30 px-4 text-sm text-white/80">
              Or sign in with
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white text-gray-800 shadow hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gray-900 text-white shadow hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.297 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.024c-3.338.724-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.086 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.495.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.302-.54-1.522.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.654.24 2.874.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.21v3.285c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-white/80">
          Don’t have an account?{" "}
          <a href="#" className="text-black-200 hover:text-white font-semibold">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
