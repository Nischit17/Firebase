import Login from './Login'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Dashboard from './Dashboard'
import Signup from './Signup'
import ErrorPage from './ErrorPage'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import DashboardLanding from './DashboardLanding'
import Analytics from './Analytics'
const Body = () => {

  const dispatch = useDispatch()

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
      path: "/error",
      element: <ErrorPage />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/DashboardLanding",
      element: <DashboardLanding />
    },
    {
      path: "/Analytics",
      element: <Analytics />
    },
  ])

  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName: displayName}))
      } else {
        dispatch(removeUser());
      }
    });
  },[])
    
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body