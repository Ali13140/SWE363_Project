import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomePage from './Pages/HomePage'
import SignUp from './Pages/SignUp'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignIn from './Pages/SignIn'


const router=createBrowserRouter([
  {
    path:"/", element: <App></App>
  },
{
  path:"/HomePage", element: <HomePage></HomePage>
},{
  path:"/SignIn", element: <SignIn/>
},{
  path:"/SignUp",element: <SignUp/>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
