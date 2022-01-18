import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import SwiperCore, { EffectCoverflow } from 'swiper'
SwiperCore.use([EffectCoverflow])

function Youtube() {
  const path = process.env.PUBLIC_URL
  const key = 'AIzaSyDcBGvXJV3oUXOEOuKGWX8KoJHrdp8sF4s'
  const playListId = 'PLjyJ0gUvOKvCsP_vyVlJZbiwgHIycsuKN'
  const num = 10
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`

  const [data, setData] = useState([])
  const [isPopup, setIsPopup] = useState(false)
  const [index, setIndex] = useState(0)

  const frame = useRef(null)

  useEffect(() => {
    getYoutube(url)
  }, [])

  return (
    <main className="youtube">
      <section className="sub__visual">
        <h1 className="title">YOUTUBE</h1>
        <figure>
          <video
            src={`${path}/video/youtube-sub-visual.mp4`}
            muted
            loop
          ></video>
        </figure>
      </section>

      <section className="youtube__contents">
        <div className="inner">
          <Swiper
            ref={frame}
            effect={'coverflow'}
            className="mySwiper anime"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            slidesPerView={'auto'}
            spaceBetween={20}
            speed={500}
            loop={true}
            loopedSlides={3}
            initialSlide={3}
            centeredSlides={true}
            keyboard={{
              enabled: true,
            }}
            // breakpoints={
            //   ({ 768: { slidesPerView: 'auto' } },
            //   { 320: { slidesPerView: 1, spaceBetween: 0 } })
            // }
          >
            {data.map((item, index) => {
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
                          {tit_len >= 40 ? tit.substr(0, 30) + '...' : tit}
                        </h2>
                        <div className="date">
                          {item.snippet.publishedAt.split('T')[0].slice(2)}
                        </div>
                      </div>
                      <p>
                        {desc_len >= 20 ? desc.substr(0, 50) + '...' : desc}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {isPopup && <Pop />}
      </section>
    </main>
  )

  function Pop() {
    return (
      <aside className="pop">
        <iframe
          src={
            'https://www.youtube.com/embed/' +
            data[index].snippet.resourceId.videoId
          }
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
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

  async function getYoutube(url) {
    await axios.get(url).then((json) => setData(json.data.items))

    setTimeout(() => {
      frame.current.classList.add('on')
    }, 0)
  }
}

export default Youtube
