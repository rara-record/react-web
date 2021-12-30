import React from 'react'
const path = process.env.PUBLIC_URL

function Project() {
  return (
    <section className="project">
      <div className="inner">
        <div className="project__content">
          <div className="project__content__box">
            <h2>We are setting standards in the real estate industry.</h2>

            <figure className="project__content__img">
              <img src={`${path}/img/project-01.jpg`} alt="" />
            </figure>

            <div className="project__content__text">
              <h3>CALEDON, ON</h3>
              <p>
                <span>Designer: </span>
                <em> Martina Skuce</em>
              </p>
            </div>
          </div>

          <div className="project__content__box">
            <figure className="project__content__img">
              <img src={`${path}/img/project-02.jpg`} alt="" />
            </figure>
            <div className="project__content__text">
              <h3>CALEDON, ON</h3>
              <p>
                <span>Designer: </span>
                <em> Martina Skuce</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
