import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="content about">
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
          <div className="inner">
            <h2>Who we are?</h2>
            <div className="text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                reprehenderit unde hic vitae non libero magni quo soluta
                architecto esse. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Qui beatae saepe sunt harum, distinctio ut est
                nihil dolore obcaecati soluta. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas rem aut unde aperiam cum
                assumenda ex magnam suscipit, veritatis perspiciatis quas quasi
                aliquam beatae magni vel, sapiente adipisci officia sint.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
