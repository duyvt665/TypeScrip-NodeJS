import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/router/Nav';
import Login from './components/pages/authentication/auth-forms/Login';
import Register from './components/pages/authentication/auth-forms/Register';
import Home from './components/pages/Home';
import Information from './components/pages/Information';
import AllUsers from './components/admin/allUser';



function App() {
 
  return (
    <>
      <Router>
        <div className='App'>
          <Routes>
                <Route path="/" element = {<Nav/>}/>
                <Route index element = {<Login/>}/>
                <Route path = "register" element={<Register/>}/>
                <Route path = "home" element={<Home/>}/>
                <Route path = "informations" element={<Information/>}/>
                <Route path = "allusers" element={<AllUsers/>}/>
          </Routes>
        </div>
      </Router>

      
    </>
  )
}

export default App
