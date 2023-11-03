import React from 'react'
import img01 from '../../assets/img/id-about__projects.png'

function AboutServices() {
  return (
    <section className='id-about__services'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={img01} alt="2 feminine bodies" />
          </div>
          <div className="col-md-4">
            <h2>Services</h2>
          </div>
          <div className="col-md-4">
            <h3>Production</h3>
            <p>Our production team is the backbone of every successful project. With meticulous attention to detail and a passion for perfection, we ensure that every aspect of your vision comes to life. From concept to execution, we handle it all, making your dreams a reality.</p>
            <h3>Location sets</h3>
            <p>Our selection of location sets is as diverse as your imagination. Whether you envision an urban chic backdrop, a rustic countryside, or an exotic destination, we've got you covered. These settings provide the canvas for your story, adding depth and character to your project.</p>
            <h3>Set Design</h3>
            <p>Set design is where creativity knows no bounds. Our team of experts specializes in crafting unique, captivating environments. With an eye for aesthetics and a flair for innovation, we transform spaces into immersive worlds that complement your vision.</p>
          </div>
          <div className="col-md-4">
            <h3>Photos</h3>
            <p>In the realm of photography, our work speaks volumes. We capture moments that last a lifetime. Our portfolio is a testament to the artistry and skill of our photographers, who breathe life into each shot, ensuring it tells a compelling story.</p>
            <h3>Makeup</h3>
            <p>Makeup is not just about enhancing beauty; it's about accentuating individuality. Our makeup artists are the magicians behind the scenes, ensuring that every model is a masterpiece. From subtle elegance to bold statements, we cater to every style and preference.</p>
            <h3>Models</h3>
            <p>Our models are the embodiment of versatility and grace. Each one brings a unique energy and character to our projects, allowing us to create visual stories that resonate with a diverse audience. Our models are the canvas on which we paint your vision.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutServices
