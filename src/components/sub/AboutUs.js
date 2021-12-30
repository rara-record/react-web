import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <main className="aboutUs">
        <div className="sub-visual">
          <div className="sub-visual__content">
            <h1 className="sub-visual__content-h1">About Us</h1>
            <div className="sub-visual__content-links">
              <Link to="/">Home</Link>
              <span className="sub-visual__content-span"></span>
              <Link to="/about">About Us</Link>
            </div>
          </div>
        </div>

        <div className="contents">
          <section className="sec01">
            <div className="inner"></div>
          </section>

          <section className="sec02">
            <div className="inner"></div>
          </section>

          <section className="sec03">
            <div className="inner"></div>
          </section>
        </div>
      </main>
    </>
  )
}

export default About
