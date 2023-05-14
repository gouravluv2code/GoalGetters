import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Resources from '../pages/Resources'
import { Regitration } from '../components/loginMain/regitration'
import { SocketMain } from '../components/socket/socketmain'
import { Login } from '../components/loginMain/login'
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/register" element={<Regitration/>}/>
        <Route path="/Room" element={<SocketMain/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}
