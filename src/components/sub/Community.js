import axios from 'axios'
import { useEffect, useState } from 'react'

function Community() {
  const path = process.env.PUBLIC_URL
  const [posts, setPosts] = useState([])
  const url = `${path}/db/community.json`

  useEffect(() => {
    axios.get(url).then((json) => {
      setPosts(json.data.data)
    })
  }, [])

  return (
    <main className="community">
      <div className="sub__visual">
        <h1>Community</h1>
      </div>

      <div className="contents">
        <section className="sec01">
          <div className="inner">
            {posts.map((data, index) => {
              return (
                <article key={index}>
                  <h2>{data.title}</h2>
                  <span>{data.writer}</span>
                  <em>{data.date}</em>
                </article>
              )
            })}
          </div>
        </section>

        <section className="sec02">
          <div className="inner"></div>
        </section>

        <section className="sec03">
          <div className="inner"></div>
        </section>
      </div>
    </main>
  )
}

export default Community
