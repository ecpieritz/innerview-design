import React from 'react'
import img01 from '../../assets/img/project01/id-projects__single__01.jpg'
import img02 from '../../assets/img/project01/id-projects__single__02.jpg'
import img03 from '../../assets/img/project01/id-projects__single__03.jpg'
import img04 from '../../assets/img/project01/id-projects__single__04.jpg'
import img05 from '../../assets/img/project01/id-projects__single__05.jpg'
import img06 from '../../assets/img/project01/id-projects__single__06.jpg'
import img07 from '../../assets/img/project01/id-projects__single__07.jpg'
import img08 from '../../assets/img/project01/id-projects__single__08.jpg'
import img09 from '../../assets/img/project01/id-projects__single__09.jpg'
import img10 from '../../assets/img/project01/id-projects__single__10.jpg'
import img11 from '../../assets/img/project01/id-projects__single__11.jpg'
import img12 from '../../assets/img/project01/id-projects__single__12.jpg'

function SingleImages() {
  return (
    <section className='id-project-single__images'>
      <div className="row">
        <div className="col-md-4">
          <img src={img01} alt="person" />
          <img src={img04} alt="person" />
          <img src={img07} alt="person" />
          <img src={img10} alt="person" />
        </div>
        <div className="col-md-4">
          <img src={img02} alt="person" />
          <img src={img05} alt="person" />
          <img src={img08} alt="person" />
          <img src={img12} alt="person" />
        </div>
        <div className="col-md-4">
          <img src={img03} alt="person" />
          <img src={img06} alt="person" />
          <img src={img09} alt="person" />
          <img src={img11} alt="person" />
        </div>
      </div>
    </section>
  )
}

export default SingleImages
