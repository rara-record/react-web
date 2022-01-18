import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function Community() {
  const path = process.env.PUBLIC_URL
  const url = `${path}/db/community.json`

  const frame = useRef(null)
  const input = useRef(null)
  const [post, setPost] = useState('')
  const [postList, setPostList] = useState([])

  useEffect(() => {}, [])

  const insertPost = () => {
    setPostList([...postList, post])
  }

  useEffect(() => {
    frame.current.classList.add('on')
    setPost('')
  }, [postList])

  return (
    <main className="community anime" ref={frame}>
      <section>
        <div className="inner">
          <h1>Community</h1>

          <div className="input__box">
            <input
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              ref={input}
            />
            <button onClick={insertPost}>save</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Community
