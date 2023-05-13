import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Resources from '../pages/Resources'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/resources" element={<Resources/>}/>
    </Routes>
  )
}
