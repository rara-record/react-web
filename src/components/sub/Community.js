import { useState, useEffect, useRef } from 'react'

function Community() {
  const frame = useRef(null)

  useEffect(() => {
    frame.current.classList.add('on')
  }, [])

  return (
    <main className="community">
      <div className="contents" ref={frame}>
        <div className="inner">
          <h1>Community</h1>

          <section className="input__box">
            <input type="text" placeholder="제목을 입력하세요" />
            <br />
            <textarea cols="30" rows="10" placeholder="본문을 입력하세요" />
            <br />
            <button>CANCEL</button>
            <button>CREATE</button>
          </section>

          <section className="show__box"></section>
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
