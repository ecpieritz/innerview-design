import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import AboutServices from '../components/About/AboutServices'
import ContactForm from '../components/Contact/ContactForm'

function About() {
  return (
    <main className='id-about'>
        <AboutBanner />
        <AboutServices />
        <ContactForm />
    </main>
  )
}

export default About
