import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const path = process.env.PUBLIC_URL
let textArray = ['DESIGN', 'PHOTO', 'DEVELOPER']
let figure = ['ScandinavianMood', 'WoodenApartment', 'MinimalisticStyle']

function Project() {
  const [text, setText] = useState(textArray)
  const [photos, setPhotos] = useState(figure)

  return (
    <>
      <section className="project">
        <div className="inner">
          <div className="wrap">
            <div className="top">
              <div className="title">
                <div>
                  <span>APARTMENTS</span>
                  <span className="num">01</span>
                </div>
                <h1>
                  Swedish apartments <br></br>in Moscow
                </h1>
              </div>
              <Link to="#" className="link">
                our next arartments<i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="contents">
              <div className="left">
                {text.map((txt, index) => {
                  return (
                    <article key={index}>
                      <h3>{txt}</h3>
                      <p>Lorem ipsum dolor</p>
                    </article>
                  )
                })}
              </div>
              <div className="right">
                {photos.map((photo, index) => {
                  let imgSrc = `${path}/img/${photo}.png`

                  return (
                    <article key={index}>
                      <figure className="pic">
                        <img src={imgSrc} alt="visual 이미지" />
                      </figure>
                      <span className="num">NUM, {index}</span>
                      <span>{photo}</span>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
