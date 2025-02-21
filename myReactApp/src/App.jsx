import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import Dashboard from './components/Dashboard'
import { useState } from 'react'
const App = () => {
  const [regData, setRegData] = useState();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register setRegData= {setRegData}/>} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={ <h1>No page available</h1> } />
      </Routes>
    </div>
  )
}

export default App