import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const path = process.env.PUBLIC_URL
const url = `${path}/db/community.json`

function Community() {
  const [posts, setPosts] = useState([])
  const frame = useRef(null)
  let length = posts.length

  useEffect(() => {
    frame.current.classList.add('on')
    axios.get(url).then((json) => {
      setPosts(json.data.data)
    })
  }, [])

  return (
    <main className="community">
      <section className="sub__visual">
        <div className="inner">
          <h1>Community</h1>
        </div>
      </section>

      <div className="contents" ref={frame}>
        <section className="notice">
          <div className="inner">
            <div className="table__wrapper">
              <div className="list__info">
                <p className="hit">
                  전체:
                  <b>{length}</b>개 (1 / <b>1</b> 페이지)
                </p>

                <div>
                  <select class="" onchange="pageCat(this.value);">
                    <option value="">전체</option>
                    <option value="39">공연</option>
                    <option value="40">전시</option>
                    <option value="48">행사</option>
                    <option value="49">기타</option>
                  </select>

                  <select
                    title="건별보기를 선택하시면 해당 페이지 리스트 갯수를 설정하실 수 있습니다."
                    id="rowsSel"
                  >
                    <option value="10" selected="selected">
                      10건씩 보기
                    </option>
                    <option value="20">20건씩 보기</option>
                    <option value="50">50건씩 보기</option>
                  </select>
                  <a href=""></a>
                </div>
              </div>
              <table>
                <caption className="visually-hidden">공지 사항 게시판</caption>
                {/* <thead>
                  <tr>
                    <th scope="col">NO</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성자</th>
                    <th scope="col">작성일</th>
                  </tr>
                </thead> */}
                <tbody>
                  {posts
                    .slice(0)
                    .reverse()
                    .map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{data.category}</td>
                          <td>
                            <Link to="#">{data.title}</Link>
                          </td>
                          <td>{data.writer}</td>
                          <td>{data.date}</td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="pagination">
          <Link to="/" className="prev"></Link>
          <ul className="numbers">
            <li>
              <Link to="/">1</Link>
            </li>
          </ul>
          <Link to="/" className="next"></Link>
        </div>
      </div>
    </main>
  )
}

export default Community
