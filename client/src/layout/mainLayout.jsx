import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../hooks/useScrollToTop'

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
