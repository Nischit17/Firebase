import {signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="bg-blue-700 text-white w-64 min-h-screen p-4">
        <h1 className="text-3xl font-semibold mb-4">Welcome, NISCHIT D S</h1>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center hover:bg-blue-600 py-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <Link to={'/DashboardLanding'}>Dashboard</Link>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center hover:bg-blue-600 py-2 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <Link to={'/Analytics'}>Analytics</Link>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center hover:bg-blue-600 py-2 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center hover:bg-blue-600 py-2 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <button 
            onClick={handleSignOut}>
              Sign Out
              </button>
            </a>
          </li>
        </ul>
        
      </aside>

      
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