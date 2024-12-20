import React from 'react'
import NotificationBar from '../components/notificationBar'
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import BestSeller from '../components/bestSeller'

function HomePage() {
  return (
    <div>
      <NotificationBar/>
      <Header/>
      <Hero/>
      <Features/>
      <BestSeller/>
    </div>
  )
}

export default HomePage
