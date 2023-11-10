import React from 'react'
import SingleBanner from '../components/Single/SingleBanner'
import SingleImages from '../components/Single/SingleImages'

function SingleProject() {
  return (
    <main className="id-project-single">
      <SingleBanner />
      <div className="container-fluid">
        <SingleImages />
      </div>
    </main>
  )
}

export default SingleProject
