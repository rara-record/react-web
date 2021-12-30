import React, { useState, useRef } from 'react'
import { BrandData } from '../../data/BrandData'
const path = process.env.PUBLIC_URL
const letter = 'residental'.split('')

function Brand() {
  const textWrapper = useRef(null)
  const [text, setText] = useState(letter)

  return (
    <section className="brand">
      <div className="inner">
        <div className="brand__wrapper">
          <div className="brand__content">
            <div className="brand__content__title">
              <h1>PRIVATE RESIDENTIAL</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                eius mod
              </p>
            </div>
            <div className="brand__content__icon">
              {BrandData.map((data, index) => {
                return (
                  <article key={index}>
                    <figure>
                      <img
                        src={`${path}/img/${data.image}.png`}
                        alt={data.alt}
                      />
                    </figure>
                    <div className="text">
                      <h2>{data.title}</h2>
                      <span>{data.excerpt}</span>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <figure className="brand__image">
            <img src={`${path}/img/brand-image.png`} alt="브랜드 이미지" />
          </figure>
        </div>

        <div className="text__wrapper" ref={textWrapper}>
          {text.map((letter, index) => {
            return <span key={index}>{letter}</span>
          })}
        </div>
      </div>
    </section>
  )
}

export default Brand
