import React from 'react'
import { IntroData } from '../../data/IntroData'
const path = process.env.PUBLIC_URL

function Intro() {
  return (
    <>
      <section className="intro myScroll">
        <div className="inner">
          <div id="section__title">
            <h1>OUR SERVICES</h1>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis
            </p>
          </div>

          <div className="icon__wrpper">
            {IntroData.map((data, index) => {
              return (
                <article className="icon__list" key={index}>
                  <div className="icon__front">
                    <figure className="icon__media">
                      <img
                        src={`${path}/img/${data.icon}.png`}
                        alt={data.alt1}
                      />
                    </figure>
                    <div className="icon__text">
                      <h2>{data.title}</h2>
                      <p>{data.description}</p>
                    </div>
                  </div>
                  <div className="icon__back">
                    <img
                      src={`${path}/img/${data.image}.jpg`}
                      alt={data.alt2}
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro
