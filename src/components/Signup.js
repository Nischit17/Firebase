import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'



const Signup = () => {

  const navigate = useNavigate()

  const [errorMessage,setErrorMessage] = useState(null)

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value, name.current.value)
    setErrorMessage(message);
    if(message) return;

    // Sign Up Logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate('/dashboard')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" +errorMessage)
    alert("User is already registered")
  });

  }

  return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-bold mb-6">Sign Up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
            ref={name}
              className="w-full py-2 px-3 rounded bg-gray-100 border border-gray-400 focus:outline-none focus:border-indigo-600"
              type="name"
              id="name"
              placeholder="Your name"
            />
          </div>
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
              Sign Up
            </button>
            <button className="text-gray-600 hover:underline text-sm cursor-pointer">
            <Link to={'/'}>Already a User? Sign In</Link>
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Signup