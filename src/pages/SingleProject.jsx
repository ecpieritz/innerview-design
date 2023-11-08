import React from 'react'
import SingleBanner from '../components/Single/SingleBanner'
import SingleGrid from '../components/Single/SingleGrid'

function SingleProject() {
  return (
    <main className="id-project-single">
      <SingleBanner />
      <div className="container-fluid">
        <SingleGrid />
      </div>
    </main>
  )
}

export default SingleProject
