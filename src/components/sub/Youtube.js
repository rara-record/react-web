/* eslint-disable jsx-a11y/iframe-has-title */
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Youtube() {
  const key = 'AIzaSyDcBGvXJV3oUXOEOuKGWX8KoJHrdp8sF4s'
  const playListId = 'PLjyJ0gUvOKvCsP_vyVlJZbiwgHIycsuKN'
  const num = 5
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`

  const [data, setData] = useState([])
  const [isPopup, setIsPopup] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    getYoutube(url)
  }, [])

  return (
    <main className="youtube">
      <section className="sub__visual">
        <div className="inner">
          <h1>YOUTUBE</h1>
          <p>
            Property Group offers a full-service, <br></br>
            residential project development.
          </p>
        </div>
      </section>

      <div className="contents">
        <section>
          <div className="inner">
            <div className="frame">
              {data.map((item, index) => {
                let tit = item.snippet.title
                let tit_len = tit.length

                let desc = item.snippet.description
                let desc_len = desc.length

                return (
                  <article key={index}>
                    <div className="inner">
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
                          {desc_len >= 20 ? desc.substr(0, 250) + '...' : desc}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          {isPopup && <Pop />}
        </section>
      </div>
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
  }
}

export default Youtube
