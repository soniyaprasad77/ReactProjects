import React from 'react'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function routes() {
  return (
    <>
     <Header/>
     <Outlet />
     <Footer />
    </>
  )
}

export default routes
