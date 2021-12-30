import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { FilckrData } from '../../data/FlickrData'
import Masonry from 'react-masonry-component'
import { Link } from 'react-router-dom'
const path = process.env.PUBLIC_URL

const MasonryOptions = {
  fitWidth: false,
  gutter: 0,
  itemSelector: '.gallery__item',
}

function Gallery() {
  let [items, setItems] = useState([])
  let [enableClick, setEnableClick] = useState(true)
  let [interest, setInterest] = useState(true)
  const [loading, setLoading] = useState(true)
  let input = useRef(null)
  let wrapper = useRef(null)

  useEffect(() => {
    getFlickr({
      type: 'interest',
    })
  }, [])

  return (
    <>
      <main className="gallery">
        <div className="sub-visual">
          <div className="sub-visual__content">
            <h1 className="sub-visual__content-h1">gallery</h1>
            <div className="sub-visual__content-links">
              <Link to="/">Home</Link>
              <span className="sub-visual__content-span"></span>
              <Link to="/about">gallery</Link>
            </div>
          </div>
        </div>

        <div className="contents">
          <section>
            <div className="inner">
              <h1
                onClick={() => {
                  if (enableClick && !interest) {
                    wrapper.current.classList.remove('on')
                    setLoading(true)
                    setEnableClick(false)
                    console.log('click')

                    getFlickr({
                      type: 'interest',
                    })
                  }
                }}
              >
                Gallery
              </h1>

              <div className="search__wrapper">
                <input
                  type="text"
                  ref={input}
                  onKeyPress={(e) => {
                    if (e.key !== 'Enter') return

                    if (enableClick) {
                      wrapper.current.classList.remove('on')
                      setLoading(true)
                      setInterest(false)
                      setEnableClick(false)

                      const tags = input.current.value
                      input.current.value = ''
                      getFlickr({
                        type: 'search',
                        tags: tags,
                      })
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (enableClick) {
                      wrapper.current.classList.remove('on')
                      setLoading(true)
                      setInterest(false)
                      setEnableClick(false)
                      const tags = input.current.value
                      input.current.value = ''
                      getFlickr({
                        type: 'search',
                        tags: tags,
                      })
                    }
                  }}
                >
                  검색
                </button>
              </div>

              {loading && (
                <div className="loading">
                  <img src={path + '/img/loading.gif'} alt="" />
                </div>
              )}

              <div className="gallery__wrapper" ref={wrapper}>
                <Masonry
                  className={'gallery__list'}
                  elementType={'ul'}
                  disableImagesLoaded={false}
                  updateOnEachImageLoad={false}
                  options={MasonryOptions}
                >
                  {items.map((data, index) => {
                    // 썸네일 이미지 주소
                    let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`

                    return (
                      <li className={'gallery__item'} key={index}>
                        <div className="card">
                          <figure>
                            <img src={imgSrc} alt={data.alt} />
                          </figure>
                          <div className="card__title__wrapper">
                            <div className="card__title">
                              <h2>{data.title}</h2>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </Masonry>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )

  // flickr 데이터를 불러온다
  async function getFlickr(opt) {
    let url = ''

    if (opt.type === 'interest') {
      url = FilckrData.initURL
    } else if (opt.type === 'search') {
      url = `${FilckrData.searchURL}${opt.tags}`
    } else {
      console.error('api 요청 타입을 interest, search 중에서 지정하세요')
    }

    await axios.get(url).then((res) => {
      setItems(res.data.photos.photo)
    })

    setTimeout(() => {
      wrapper.current.classList.add('on')
      setLoading(false)
      setTimeout(() => {
        setEnableClick(true)
      }, 1000)
    }, 1000)
  }
}

export default Gallery

// 1. useState로 데이터를 담을 빈배열 만들기
// 2. useEffect로 데이터 불러오기
// 3. 받은 데이터로 맵 돌려서 출력하기
// 4. useRef로 조작할 돔 참조하기
// 5. masonery 설치하기
// 6. masonery 옵션 설정하고, ul 만들기
// 7. 데이터 불러올때 1초 지연주기 (모션 적용)
// 8. 검색 버튼 만들기
