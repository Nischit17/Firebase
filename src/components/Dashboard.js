import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 w-52 min-h-screen p-4">
        <div className="text-white text-2xl font-semibold mb-4">NISCHIT D S</div>
        <ul className="space-y-4">
          <li>
            <button
              href="#"
              className="text-white hover:bg-blue-600 py-6 px-4 block"
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              href="#"
              className="text-white hover:bg-blue-600 py-6 px-4 block"
            >
              Analytics
            </button>
          </li>
          <li>
            <button
              href="#"
              className="text-white hover:bg-blue-600 py-6 px-4 block"
            >
              Settings
            </button>
          </li>
        </ul>
      </div>

      
      <div className="flex-1 bg-gray-100 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-4">I - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-4">II - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-4">III - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard