import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Landing from './Component/Landing'
import Register from './Component/Register'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import Profile from './Component/Profile'
import AdminDashboard from './assets/AdminDashboard'

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Admin-Dashboard' element={<AdminDashboard/>}/>
        </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
