import React, { useRef, useState, useEffect } from 'react'
import { SliderData } from '../../data/SliderData'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Parallax } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

function Visual() {
  const path = process.env.PUBLIC_URL
  const [setSwiper] = useState(null)
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

  useEffect(() => {
    navigationPrevRef.current.classList.add('on')
    navigationNextRef.current.classList.add('on')
  }, [])

  return (
    <figure className="visual">
      <div className="visual__contents">
        <div className="inner">
          <Swiper ref={setSwiper} {...swiperParams} className="mySwiper">
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
                      Discover
                      <span className="number" data-swiper-parallax-y="60%">
                        {index + 1}
                      </span>
                    </div>
                  </article>
                </SwiperSlide>
              )
            })}

            <button className="prev" ref={navigationPrevRef}>
              <FaLongArrowAltLeft size="16" color="#272727" />
            </button>
            <button className="next" ref={navigationNextRef}>
              <FaLongArrowAltRight size="16" color="#272727" />
            </button>
          </Swiper>

          <footer>
            <div className="social">
              <ul className="social__icons">
                <li className="social__icons__item">
                  <a className="social__link" href="https://www.facebook.com/">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>

                <li className="social__icons__item">
                  <a className="social__link" href="https://www.facebook.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li className="social__icons__item">
                  <a className="social__link" href="https://www.facebook.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>

                <li className="social__icons__item">
                  <a className="social__link" href="https://www.facebook.com/">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>

            <p className="copyright">
              © 2022 <span>BORA </span> Frontend Developer
            </p>
          </footer>
        </div>
      </div>
    </figure>
  )
}

export default Visual
