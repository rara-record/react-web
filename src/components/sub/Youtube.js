/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import SwiperCore, { EffectCoverflow } from 'swiper'
SwiperCore.use([EffectCoverflow])

function Youtube() {
  const frame = useRef(null)
  const [isPopup, setIsPopup] = useState(false)
  const [index, setIndex] = useState(0)

  const youtube = useSelector((state) => state)
  const vidData = youtube.youtubeReducer.youtube

  useEffect(() => {
    frame.current.classList.add('on')
  }, [])

  return (
    <main className="youtube">
      <div className="sub__visual">
        <div className="slogan">
          <h1>
            <div className="title">YOUTUBE</div>
          </h1>
          <h2>
            <div className="subtitle">GUSTAV CALATRAVA</div>
          </h2>
        </div>
      </div>

      <div className="youtube__contents">
        <div className="inner contents" ref={frame}>
          <Swiper
            effect={'coverflow'}
            className="mySwiper"
            coverflowEffect={{
              rotate: 50,
              stretch: -70,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            speed={500}
            slidesPerView={'auto'}
            loopedSlides={3}
            spaceBetween={0}
            centeredSlides={true}
            grabCursor={true}
            // observer={true}
            // observeParents={true}
            // breakpoints={
            //   ({ 768: { slidesPerView: 'auto' } },
            //   { 320: { slidesPerView: 1, spaceBetween: 0 } })
            // }
          >
            {vidData.map((item, index) => {
              let tit = item.snippet.title
              let tit_len = tit.length

              let desc = item.snippet.description
              let desc_len = desc.length

              return (
                <SwiperSlide key={index}>
                  <article>
                    <figure
                      className="pic"
                      onClick={() => {
                        setIsPopup(true)
                        setIndex(index)
                      }}
                    >
                      <img src={item.snippet.thumbnails.medium.url} alt="" />
                    </figure>
                    <div className="text-box">
                      <div className="title">
                        <h2>
                          {tit_len >= 40 ? tit.substr(0, 25) + '...' : tit}
                        </h2>
                      </div>
                      <p>
                        {desc_len >= 20 ? desc.substr(0, 130) + '...' : desc}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {isPopup && <Pop />}
      </div>
    </main>
  )

  function Pop() {
    return (
      <aside className="pop">
        <iframe
          src={
            'https://www.youtube.com/embed/' +
            vidData[index].snippet.resourceId.videoId
          }
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
        <h2>{vidData[index].title}</h2>
        <span
          onClick={() => {
            setIsPopup(false)
          }}
        >
          close
        </span>
      </aside>
    )
  }
}

export default Youtube
