import { useEffect, useState } from 'react/cjs/react.development'

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
  }, [])

  return (
    <section id="news" className="myScroll">
      <div className="inner">
        <h2>RECENT NEWS</h2>

        <div className="txtBox">
          {posts.map((post, index) => {
            if (index < 6) {
              return (
                <article key={index}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
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
