import React from 'react'
import img01 from '../../assets/img/id-home__special__01.png'
import img02 from '../../assets/img/id-home__special__02.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function HomeSpecial() {
  return (
    <section className='id-home__special'>
      <div className="container-fluid">
        <div className="row">
          <div className="id-home__special__img col-md-5">
            <img src={img01} alt="Man in red clothes" />
          </div>
          <div className="id-home__special__text col-md-7">
            <h2>Special Photography Studio Based in Ananindeua/PA, Brazil</h2>
            <p>Always taking great pleasure in the work we do, we find satisfaction in the simple acts of thinking and making. Since 2005, we’ve worked to build strategies and craft solutions for our collaborators, applying reason and rationality to the process of design.</p>
            <a className='id-btn arrow' href="/about">About us <FontAwesomeIcon icon={faArrowRightLong} /></a>
            <img src={img02} alt="Man in black and white filter" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSpecial
