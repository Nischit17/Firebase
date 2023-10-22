import React from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard'
import Signup from './Signup'

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    }
  ])


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body