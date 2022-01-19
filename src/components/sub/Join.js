import { useState } from 'react'

function Join() {
  const step = ['약관동의', '실명인증', '정보입력', '가입완료']
  const initValue = {
    userid: '',
  }

  // state
  const [stepBox, setStepBox] = useState(step)
  const [value, setValue] = useState(initValue)
  const [err, setErr] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefaut()
    setIsSubmit(true)
  }

  return (
    <main className="join">
      <div className="inner">
        <h1>JOIN</h1>
        <div className="step__box">
          <ol>
            {stepBox.map((title, index) => {
              return (
                <li key={index}>
                  <div>
                    <p>step</p>
                    <em>0{index + 1}</em>
                  </div>
                  <span>{title}</span>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="join__wrapper">
          <h2 className="join__title">
            <em>필수정보입력</em>
            <span>필수정보</span>
          </h2>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="visually-hidden">회원가입 입력 폼 양식</legend>

              <table>
                <caption className="visually-hidden">회원가입 입력</caption>
                <colgroup>
                  <col className="head" />
                  <col />
                </colgroup>
                <tbody>
                  {/* user ID*/}
                  <tr>
                    <th scope="row">
                      <label htmlFor="userid">아이디</label>
                    </th>
                    <td>
                      <input type="text" id="userid" name="userid" />
                      <button>중복확인</button>
                      <p>5~12자의 영문, 숫자로 입력해 주시기 바랍니다.</p>
                    </td>
                  </tr>

                  {/* password */}
                  <tr>
                    <th scope="row">
                      <label htmlFor="pwd1">비밀번호</label>
                    </th>
                    <td>
                      <input type="password" id="pwd1" name="pwd1" />
                      <p>
                        10자 이상의 영문, 숫자, 특수문자로 입력해 주시기
                        바랍니다.(연속된 문자 '123','abc','qwe','111'..등은
                        사용불가 합니다.)
                      </p>
                    </td>
                  </tr>

                  {/*  re password  */}
                  <tr>
                    <th scope="row">
                      <label htmlFor="pwd2">비밀번호 확인</label>
                    </th>
                    <td>
                      <input type="password" id="pwd2" name="pwd2" />
                      <p>
                        정확한 확인을 위하여 한번 더 입력해 주시기 바랍니다.
                      </p>
                    </td>
                  </tr>

                  {/*  user name  */}
                  <tr>
                    <th scope="row">
                      <label htmlFor="username">이름</label>
                    </th>
                    <td>
                      <input type="text" id="username" name="username" />
                    </td>
                  </tr>

                  {/*  birth day */}
                  <tr>
                    <th scope="row">
                      <label htmlFor="birth">생년월일</label>
                    </th>
                    <td>
                      <input
                        type="text"
                        id="birth1"
                        name="birth1"
                        style={{ marginRight: '9px' }}
                      />
                      <input
                        type="text"
                        id="birth2"
                        name="birth2"
                        style={{ marginRight: '9px' }}
                      />
                      <input type="text" id="birth3" name="birth3" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Join
