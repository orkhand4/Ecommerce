import React from 'react'
import Header from '../components/header'
import NotificationBar from '../components/notificationBar'

const AboutPage = () => {
  return (
    <div>
      <NotificationBar/>
      <Header/>
      <h1 className='text-6xl py-28 text-center'>ABOUT PAGE</h1>
    </div>
  )
}

export default AboutPage
