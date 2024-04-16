import React from 'react'
import { Outlet } from 'react-router-dom'
import "./MainLayout.css"
const MainLayout = () => {
  return (
    <div className='Out'>
      <Outlet/>
    </div>
  )
}

export default MainLayout
