import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SliderData } from './../../data/SliderData'
const path = process.env.PUBLIC_URL

function Visual() {
  const [current, setCurrent] = useState(0)
  const length = SliderData.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current - 1)
  }

  return (
    <figure className="visual">
      <div className="slider__wrapper">
        {SliderData.map((slide, index) => {
          let imgSrc = `${path}/img/${slide.image}.jpg`
          return (
            <div className="slider" key={index}>
              <article className="slider__item">
                <figure className="slider__item__pic">
                  <img src={imgSrc} alt={slide.alt} />
                </figure>

                <h1 className="slider__item__text">
                  <Link to="/">{slide.title}</Link>
                </h1>

                <div className="slider__item__contents">
                  <div className="content__info">
                    <span>Designer: </span>
                    <p>{SliderData.name}</p>
                  </div>
                  <div className="content__btn">
                    <Link to="/">Know more</Link>
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>

      <div className="sns__wrapper">
        <Link to="/">fb</Link>
        <Link to="/">tw</Link>
        <Link to="/">in</Link>
      </div>

      <div className="button__wrapper">
        <button className="prev" onClick={prevSlide}>
          prev
        </button>
        <button className="next" onClick={nextSlide}>
          next
        </button>
      </div>
    </figure>
  )
}

export default Visual
