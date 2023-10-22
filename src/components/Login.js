import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { checkValidData } from '../utils/validate';

const Login = () => {

  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message);
    if(!message) return;

    // Sign In 
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-bold mb-6">Sign In</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
            ref={email}
              className="w-full py-2 px-3 rounded bg-gray-100 border border-gray-400 focus:outline-none focus:border-indigo-600"
              type="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
            ref={password}
              className="w-full py-2 px-3 rounded bg-gray-100 border border-gray-400 focus:outline-none focus:border-indigo-600"
              type="password"
              id="password"
              placeholder="Your password"
            />
          </div>
          <p className='text-red-400 py-2'>{errorMessage}</p>
          
          <div className="flex items-center justify-between">
            <button onClick={handleButtonClick}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <button className="text-gray-600 hover:underline text-sm cursor-pointer">
            <Link to={"/signup"}>Not a User? Sign Up</Link> 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login