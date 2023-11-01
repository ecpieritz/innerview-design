import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import HomeSpecial from '../components/Home/HomeSpecial'
import HomeProjects from '../components/Home/HomeProjects'

function Home() {
  return (
    <main className='id-home'>
      <HomeBanner />
      <HomeSpecial />
      <HomeProjects />
    </main>
  )
}

export default Home
