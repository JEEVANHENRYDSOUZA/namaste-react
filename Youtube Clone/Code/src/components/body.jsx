import React from 'react'
import Sidebar from './sidebar'
import MainContainer from './mainContainer'
import { Outlet } from 'react-router-dom'
function Body() {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />

    </div>
  )
}

export default Body
