import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomePage from './Pages/HomePage'
import SignUp from './Pages/SignUp'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignIn from './Pages/SignIn'
import ProfilePage from './Pages/ProfilePage'
import MyListPage from "./Pages/MyListPage"
import NewListPage from "./Pages/NewListPage"
import ViewListPage from "./Pages/ViewListPage"


const router=createBrowserRouter([
  {
    path:"/", element: <App/>
  },
{
  path:"/HomePage", element: <HomePage/>
},{
  path:"/SignIn", element: <SignIn/>
},{
  path:"/SignUp",element: <SignUp/>
},{
  path:"/Profile",element:<ProfilePage/>
}
,{
  path:"/MyListPage", element: <MyListPage/>
},
{
  path:"/newListPage",element:<NewListPage/>
},
  {
    path:"/ViewListPage", element:<ViewListPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
