import React from 'react'
import SingleBanner from '../components/Single/SingleBanner'
import SingleTexts from '../components/Single/SingleTexts'
import SingleImages from '../components/Single/SingleImages'
import ContactForm from '../components/Contact/ContactForm'

function SingleProject() {
  return (
    <main className="id-project-single">
      <SingleBanner />
      <div className="container-fluid">
        <SingleTexts />
        <SingleImages />
      </div>
      <div className="bg-black">
        <ContactForm className='black' />
      </div>
    </main>
  )
}

export default SingleProject
