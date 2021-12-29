import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Visual(props) {
  const [current, setCurrent] = useState(0)
  const length = props.slides.length
  const timeout = useRef(null)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current - 1)
  }

  return (
    <>
      <section className="visual">
        <div className="slider__wrapper">
          {props.slides.map((slide, index) => {
            let imgSrc = `${props.path}/img/${slide.image}.jpg`
            return (
              <div className="slider" key={index}>
                <article className="slider__item">
                  <figure className="slider__item__pic">
                    <img src={imgSrc} alt={slide.alt} />
                  </figure>
                  <h1 className="slider__item__text">
                    <Link to="/">{slide.title}</Link>
                  </h1>
                </article>
              </div>
            )
          })}
        </div>

        <div className="button__wrapper">
          <button className="prev" onClick={prevSlide}>
            prev
          </button>
          <button className="next" onClick={nextSlide}>
            next
          </button>
        </div>
      </section>
    </>
  )
}

export default Visual