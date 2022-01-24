import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderData } from '../../data/SliderData'
import 'swiper/swiper.scss'

function Visual() {
  const path = process.env.PUBLIC_URL

  return (
    <figure className="visual">
      <div className="slider">
        <div className="inner">
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={3000}
          >
            {SliderData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <article className="slider__block">
                    <div
                      className="slider__block__img"
                      data-swiper-parallax-y="70%"
                    >
                      <img src={path + item.image} alt={item.alt} />
                    </div>

                    <div className="slider__block__text">
                      <h1 className="title" data-swiper-parallax-y="-60%">
                        {item.title}
                      </h1>
                      <h2 className="sub__title" data-swiper-parallax-y="-50%">
                        {item.sub_title}
                      </h2>
                      <p className="paragraph" data-swiper-parallax-y="-40%">
                        {item.paragraph}
                      </p>
                      <a
                        className="link"
                        href="#"
                        data-swiper-parallax-y="-30%"
                      >
                        Discover
                      </a>
                      <span className="slider__number">{index + 1}</span>
                    </div>

                    <div
                      className="swiper-button-next animate-box fadeInRight animated"
                      data-animate-effect="fadeInRight"
                    >
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div
                      className="swiper-button-prev animate-box fadeInLeft animated"
                      data-animate-effect="fadeInLeft"
                    >
                      <i
                        className="fa fa-long-arrow-left"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </article>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </figure>
  )
}

export default Visual
