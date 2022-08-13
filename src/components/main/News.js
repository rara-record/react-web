import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function News() {
  // 초기 데이터 설정
  const basic = [
    { title: 'Hello1', content: 'Here comes description in detail.' },
    { title: 'Hello2', content: 'Here comes description in detail.' },
    { title: 'Hello3', content: 'Here comes description in detail.' },
    { title: 'Hello4', content: 'Here comes description in detail.' },
    { title: 'Hello5', content: 'Here comes description in detail.' },
    { title: 'Hello6', content: 'Here comes description in detail.' },
  ]

  // 로컬스토리지에 저장한 데이터 꺼내기
  const getLocalItems = () => {
    let data = localStorage.getItem('posts')

    if (data) {
      return JSON.parse(data)
    } else {
      return basic
    }
  }

  // state
  const [posts] = useState(getLocalItems)

  // 로컬 스토리지에 데이터 저장하기
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  return (
    <section className="news myScroll">
      <div className="inner">
        <div id="section__title">
          <h1>LATEST BLOG ENTRIES</h1>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis
          </p>
        </div>

        <div className="news__box">
          {posts.map((post, index) => {
            if (index < 6) {
              return (
                <article key={index}>
                  <Link to="/community" key={index}>
                    <h3>{post.title}</h3>
                    <div className="news__info">
                      <span>by admin</span>
                      <span>Housing</span>
                      <span>November {index + 1}, 2017</span>
                    </div>
                    <p>{post.content}</p>
                  </Link>
                </article>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default News
