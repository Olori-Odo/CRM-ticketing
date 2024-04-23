import React from 'react'
import { Outlet } from 'react-router-dom'
import "./MainLayout.css"
const MainLayout = () => {
  return (
    <div className='Out'>
      <div className='let'>
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
