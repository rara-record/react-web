import { useState, useEffect, useRef } from 'react'

function Community() {
  /// ref
  const frame = useRef(null)
  const input = useRef(null)
  const textarea = useRef(null)
  const updateInput = useRef(null)
  const updateTextarea = useRef(null)
  const showBox = useRef(null)

  // 초기 데이터 셋팅
  const [posts, setPosts] = useState([
    { title: '질문 있습니다', content: ' Lorem, ipsum dolor.' },
  ])

  // post 추가 함수
  const creactPost = () => {
    if (!input.current.value || !textarea.current.value) {
      alert('제목과 본문을 입력하세요')
      return
    }
    setPosts([
      { title: input.current.value, content: textarea.current.value },
      ...posts,
    ])
    input.current.value = ''
    textarea.current.value = ''
  }

  // post 삭제 함수
  const deletePost = (index) => {
    setPosts(posts.filter((_, selectedPost) => index !== selectedPost))
    /* filter : 특정조건이 성립하는 데이터만 다시 새롭게 반환 */
  }

  // 출력모드에서 수정모드로 변경하는 함수
  const enableUpdate = (index) => {
    setPosts(
      posts.map((post, selectedPost) => {
        if (selectedPost === index) post.enableUpdate = true
        return post
      })
    )
    console.log(posts)
  }

  // 수정모드에서 출력모드로 변경하는 함수
  const disableUpdate = (index) => {
    setPosts(
      posts.map((post, selectedPost) => {
        if (selectedPost === index) post.enableUpdate = false
        return post
      })
    )
    console.log(posts)
  }

  // 실제 포스트 수정 업데이트 함수
  const updatePost = (index) => {
    setPosts(
      posts.map((post, selectedPost) => {
        if (selectedPost === index) {
          post.title = updateInput.current.value
          post.content = updateTextarea.current.value
          post.enableUpdate = false
        }
        return post
      })
    )
  }

  useEffect(() => {
    frame.current.classList.add('on')
  }, [])

  return (
    <main className="community">
      <div className="contents" ref={frame}>
        <div className="inner">
          <h1>Community</h1>

          <section className="input__box">
            <input type="text" placeholder="제목을 입력하세요" ref={input} />
            <br />
            <textarea
              cols="30"
              rows="10"
              placeholder="본문을 입력하세요"
              ref={textarea}
            />
            <br />
            {/* CANCEL BUTTON */}
            <button
              onClick={() => {
                input.current.value = ''
                textarea.current.value = ''
              }}
            >
              CANCEL
            </button>
            {/* CREATE BUTTON */}
            <button onClick={() => creactPost()}>CREATE</button>
          </section>

          <section className="show__box" ref={showBox}>
            {posts.map((post, index) => {
              return (
                <article key={index}>
                  <div className="post">
                    {post.enableUpdate ? (
                      // 수정모드
                      <>
                        <input
                          type="text"
                          defaultValue={post.title}
                          ref={updateInput}
                        />
                        <textarea
                          defaultValue={post.content}
                          ref={updateTextarea}
                        ></textarea>
                      </>
                    ) : (
                      // 출력모드
                      <>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                      </>
                    )}
                  </div>

                  <ul className="btns">
                    {post.enableUpdate ? (
                      // 수정모드
                      <>
                        <li onClick={() => updatePost(index)}>저장</li>
                        <li onClick={() => disableUpdate(index)}>취소</li>
                      </>
                    ) : (
                      // 출력모드
                      <>
                        <li onClick={() => enableUpdate(index)}>수정</li>
                        <li onClick={() => deletePost(index)}>삭제</li>
                      </>
                    )}
                  </ul>
                </article>
              )
            })}
          </section>
        </div>
      </div>
    </main>
  )
}

// useRef 참조하기
// post 배열 상태관리 - 초기 데이터 설정
// post 스테이트로 반복문 출력
// enableUpdate 스테이트 만들어서, 수정모드 or 출력모드로 jsx 나누기

// creact버튼 클릭시 creactPost 함수
// post 스테이트 변경 => 객체로 만들어서, 내가 입력한 데이터 추가 + 전개연산자로 기존 스테이트 유지

// 삭제버튼 클릭시  deletePost 함수
// 필터함수로 포스트 함수

// 수정버튼 클릭시 enableUpdate 함수 실행
// 맵으로 post==index 시 post에 enableUpdate true추가
// 리턴문으로 내보내기
// post가 enableUpdate가 true면 수정모드 jsx
// 수정모드 jsx버튼 클릭시 updatePost
// 클릭한 index == map index ㄹ면?
// input, textarea useRef 참조해서 value 가져와서 담음
// enable 클릭시 false 출력모드

export default Community
