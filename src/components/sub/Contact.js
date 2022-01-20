import { useEffect, useState, useRef } from 'react'
import { ContactData } from '../../data/ContactData'
const path = process.env.PUBLIC_URL

function Contact() {
  const { kakao } = window

  const frame = useRef(null)
  const container = useRef(null)
  const btnBranch = useRef(null)

  const [map, setMap] = useState(null)
  // 순서값을 index스테이트에 넣어서 관리
  const [index, setIndex] = useState(0)
  const [toggle, setToggle] = useState(false)

  // 초기 정보값
  const data = [
    {
      title: '본점',
      latlng: new kakao.maps.LatLng(37.55748635344998, 126.8361409, 18.75),
      //public폴더 안쪽의 절대경로와 이미지 주소 연결
      imgSrc: process.env.PUBLIC_URL + '/img/marker.png',
      imgSize: new kakao.maps.Size(50, 50),
      imgPos: { offset: new kakao.maps.Point(20, 50) },
    },
    {
      title: ' 수원 지점',
      latlng: new kakao.maps.LatLng(37.27837104859774, 127.02751275725485),
      imgSrc: process.env.PUBLIC_URL + '/img/marker.png',
      imgSize: new kakao.maps.Size(50, 50),
      imgPos: { offset: new kakao.maps.Point(25, 40) },
    },
    {
      title: '제주 지점',
      latlng: new kakao.maps.LatLng(33.46701997404598, 126.54544061331417),
      imgSrc: process.env.PUBLIC_URL + '/img/marker.png',
      imgSize: new kakao.maps.Size(50, 50),
      imgPos: { offset: new kakao.maps.Point(25, 40) },
    },
  ]

  const [mapData, setMapData] = useState(data)

  //컴포넌트 생성시
  useEffect(() => {
    frame.current.classList.add('on')
    container.current.innerHTML = ''
    const options = {
      center: mapData[index].latlng,
      level: 3,
    }
    //카카오 맵 실행
    const map = new kakao.maps.Map(container.current, options)
    setMap(map)
    // 마커 인스턴스 호출
    new kakao.maps.Marker({
      map: map,
      position: mapData[index].latlng,
      title: mapData[index].title,
      image: new kakao.maps.MarkerImage(
        mapData[index].imgSrc,
        mapData[index].imgSize,
        mapData[index].imgPos
      ),
    })
    map.setCenter(mapData[index].latlng)
    //지도 타입변경 패널 프레임에 생성
    const mapTypeControl = new kakao.maps.MapTypeControl()
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)
    map.setZoomable(true)
    map.setDraggable(true)

    for (const btn of btnBranch.current.children) {
      btn.classList.remove('on')
      btnBranch.current.children[index].classList.add('on')
    }

    const mapSet = () => map.setCenter(mapData[index].latlng)
    // 윈도우 리사이즈시 마커 위치 중앙배치
    window.addEventListener('resize', mapSet)

    return () => window.addEventListener('resize', mapSet)
  }, [index])

  return (
    <main className="contact">
      <div className="sub__visual">
        <div className="inner">
          <div className="slogan">
            <h1>
              <div className="about__title">CONTACT US</div>
            </h1>
            <h2>
              <div className="about__subtitle">GUSTAV CALATRAVA</div>
            </h2>
          </div>
        </div>
      </div>

      <div className="contents" ref={frame}>
        <section className="contact__info">
          <div className="inner">
            {ContactData.map((info, index) => {
              return (
                <article key={index}>
                  <div className="info__icon">
                    <i className={info.icon}></i>
                  </div>
                  <h1>{info.title}</h1>
                  <ul className="detail">
                    <li>{info.detail[0]}</li>
                    <li>{info.detail[1]}</li>
                  </ul>
                </article>
              )
            })}
          </div>
        </section>

        <section className="contact__form">
          <div className="inner">
            <figure>
              <img src={path + '/img/contact-form-img.jpg'} alt="" />
            </figure>

            <div className="form__wrapper">
              <h1>Send Your Message To Us</h1>
              <form>
                <input
                  type="text"
                  name="to_name"
                  required
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="Phone"
                />
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location Of Event"
                />
                <textarea
                  name="message_html"
                  cols="30"
                  rows="5"
                  required
                  placeholder="Enter Message Here"
                />
                <div className="check">
                  <input type="checkbox" />
                  <span>
                    Save my name, email in this browser for the next time Send
                    message
                  </span>
                </div>

                <div className="button__outline">
                  <input type="submit" value="Post Comment" />
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="contact__location">
          <div className="inner">
            <h1>LOCATION</h1>

            {/* 맵이 출력될 프레임 useRef로 참조 */}
            <div id="map" ref={container}></div>

            <ul className="traffic">
              {
                //토글값이 true일때 끄기버튼 활성화
                toggle ? (
                  <li
                    onClick={() => {
                      map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
                      //현재 토글의 boolean값을 반전
                      setToggle(!toggle)
                    }}
                  >
                    🚗 TRAFFIC
                    <span> OFF</span>
                  </li>
                ) : (
                  //토글값이 false일때 켜기버튼 활성화
                  <li
                    onClick={() => {
                      map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
                      //현재 토글의 boolean값을 반전
                      setToggle(!toggle)
                    }}
                  >
                    🚗 TRAFFIC
                    <span> ON</span>
                  </li>
                )
              }
            </ul>

            {/* 각 브랜치 버튼 클릭시 mapData state에서 정보값 불러와 지도 위치 변경 */}
            <ul className="branch" ref={btnBranch}>
              <li
                onClick={() => {
                  setIndex(0)
                }}
              >
                서울지점
              </li>
              <li
                onClick={() => {
                  setIndex(1)
                }}
              >
                수원지점
              </li>
              <li
                onClick={() => {
                  setIndex(2)
                }}
              >
                제주지점
              </li>
            </ul>
          </div>
        </section>

        <section className="contact__table">
          <h1 className="visually-hidden">오시는 길 정보</h1>
          <div className="inner">
            <h2>주차장 이용방법</h2>
            <table cellPadding="0" cellSpacing="0">
              <caption></caption>
              <colgroup>
                <col className="head"></col>
                <col></col>
              </colgroup>
              <tbody>
                <tr>
                  <th scope="col">홈플러스 주차장 이용시</th>
                  <td>홈플러스 주차 후 4층 구름다리를 이용하여 이동</td>
                </tr>
                <tr>
                  <th scope="col">단원미술관 주차장 이용시</th>
                  <td>
                    노적봉 폭포를 지나 바로 우측(맨 오른쪽차선)전시관으로 이동
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>문의전화</h2>
            <table cellPadding="0" cellSpacing="0">
              <caption></caption>
              <colgroup>
                <col className="head"></col>
                <col></col>
              </colgroup>
              <tbody>
                <tr>
                  <th scope="col">단원미술관 문의</th>
                  <td>031-481-0505</td>
                </tr>
              </tbody>
            </table>

            <h2>교통편 안내</h2>
            <table cellPadding="0" cellSpacing="0">
              <caption></caption>
              <colgroup>
                <col className="head"></col>
                <col></col>
              </colgroup>
              <tbody>
                <tr>
                  <th scope="col">버스</th>
                  <td>
                    23번, 31번, 52번 이용 (성포동 홈플러스 앞 하차, 도보 5분)
                  </td>
                </tr>
                <tr>
                  <th scope="col">지하철</th>
                  <td>
                    4호선 한대앞역 하차(3번출구) &gt; 버스 환승(31번, 33번,
                    52번) [성포동 홈플러스 앞 하차, 도보 5분]
                  </td>
                </tr>
                <tr>
                  <th scope="col">자가용</th>
                  <td>
                    성포동 홈플러스 4층 주차 후 미술관 연결통로 이용(무료주차)
                    <span>
                      * 연결통로 개방시간 : 동절기 10:00 ~ 19:00 / 하절기 10:00
                      ~ 20:00
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Contact
