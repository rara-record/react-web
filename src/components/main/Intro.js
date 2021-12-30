import React from 'react'
import { IntroData } from '../../data/IntroData'
const path = process.env.PUBLIC_URL

function Intro() {
  return (
    <>
      <section className="intro">
        <div className="inner">
          <h1 className="visually-hidden">INTRO</h1>
          <div className="intro__left">
            {IntroData.map((data, index) => {
              return (
                <article key={index}>
                  <h2>{data.title}</h2>
                  <div className="wrap">
                    <span>{data.number}</span>
                    <p>{data.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="intro__right">
            <h3>
              See how we<br></br>works
            </h3>
            <p>
              Let's see how we are woking. Discover the best<br></br> interior
              design for your sweet home.
            </p>
            <figure>
              <img src={`${path}/img/intro.jpg`} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro
