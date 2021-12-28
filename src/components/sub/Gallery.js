import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { FilckrData } from '../../data/FlickrData'
import Masonry from 'react-masonry-component'

const MasonryOptions = {
  fitWidth: false,
  gutter: 0,
  itemSelector: '.gallery__item',
}

function Gallery() {
  const [items, setItems] = useState([])
  let wrapper = useRef(null)

  useEffect(() => {
    getFlickr(FilckrData.initUrl)
  }, [])

  return (
    <div>
      <section className="content gallery">
        <div className="inner">
          <h1>Gallery</h1>
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
  )

  // flickr 데이터를 불러온다
  async function getFlickr(url) {
    await axios.get(url).then((res) => {
      setItems(res.data.photos.photo)
    })

    setTimeout(() => {
      wrapper.current.classList.add('on')
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
