import React, { useRef, useState } from 'react'
import { SliderData } from '../../data/SliderData'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Parallax } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

function Visual() {
  const path = process.env.PUBLIC_URL
  const [swiper, setSwiper] = useState(null)
  const [mainImageIndex, setMainImageIndex] = useState(0)

  SwiperCore.use([Navigation, Parallax])

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 3000,
    parallax: true,
    effect: 'slide',
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current
      swiper.params.navigation.nextEl = navigationNextRef.current
      swiper.activeIndex = mainImageIndex
      swiper.navigation.update()
    },
    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),
  }

  return (
    <figure className="visual">
      <div className="visual__contents">
        <div className="inner">
          <Swiper {...swiperParams} ref={setSwiper} className="mySwiper">
            {SliderData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <article className="slider__block">
                    <figure
                      className="slider__block__image"
                      data-swiper-parallax-y="70%"
                    >
                      <img src={path + item.image} alt={item.alt} />
                    </figure>

                    <div className="slider__block__text">
                      <h1 className="main__title" data-swiper-parallax-x="-60%">
                        {item.title}
                      </h1>
                      <h2 className="sub__title" data-swiper-parallax-x="-50%">
                        {item.sub_title}
                      </h2>
                      <p className="paragraph" data-swiper-parallax-x="-40%">
                        {item.paragraph}
                      </p>
                      <a
                        className="link"
                        href="#"
                        data-swiper-parallax-x="-30%"
                      >
                        Discover
                      </a>
                      <span className="number" data-swiper-parallax-y="60%">
                        {index + 1}
                      </span>
                    </div>
                  </article>
                </SwiperSlide>
              )
            })}
            <button className="prev" ref={navigationPrevRef}>
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </button>
            <button className="next" ref={navigationNextRef}>
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
          </Swiper>

          <footer>
            <div class="widget">
              <ul class="social__icons">
                <li class="social__icons__item">
                  <a class="social__link" href="https://www.facebook.com/">
                    {' '}
                    <span class="next-social-icon fa fa-facebook-f"></span>{' '}
                  </a>
                </li>
                <li class="social__icons__item">
                  <a class="social__link" href="https://www.facebook.com/">
                    {' '}
                    <span class="next-social-icon fa fa-facebook-f"></span>{' '}
                  </a>
                </li>
                <li class="social__icons__item">
                  <a class="social__link" href="https://www.facebook.com/">
                    {' '}
                    <span class="next-social-icon fa fa-facebook-f"></span>{' '}
                  </a>
                </li>
              </ul>
            </div>

            <p className="copyright">
              © 2021 <span>NEXT ARCH.</span> All right reserved.
            </p>
          </footer>
        </div>
      </div>

      <div className="bg-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </figure>
  )
}

export default Visual
