import React from 'react'
import Header from '../components/header'
import NotificationBar from '../components/notificationBar'
import Footer from '../components/footer'

const ContactPage = () => {
  return (
    <div>
      <NotificationBar/>
      <Header/>
      <h1 className='text-6xl py-28 text-center'>CONTACT PAGE</h1>
      <Footer/>
    </div>
  )
}

export default ContactPage
