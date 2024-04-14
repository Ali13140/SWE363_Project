import { useState } from 'react'
import HomePage from './Pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import MyListPage from './Pages/MyListPage';
import NewListPage from './Pages/NewListPage';
import ProfilePage from './Pages/ProfilePage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ViewListPage from './Pages/ViewListPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <ViewListPage></ViewListPage>
  )
}
export default App;
