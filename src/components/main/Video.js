import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setYoutube } from '../../redux/actions'

function Video() {
  const youtube = useSelector((state) => state)
  const dispatch = useDispatch()
  const vidData = youtube.youtubeReducer.youtube

  // youtube api호출시 url 옵션값
  const key = 'AIzaSyDcBGvXJV3oUXOEOuKGWX8KoJHrdp8sF4s'
  const playListId = 'PLjyJ0gUvOKvCsP_vyVlJZbiwgHIycsuKN'
  const num = 10
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`

  //youtube데이터를 axio로 호출해서 dispatch를 통해 reducer에 전달하는 함수 정의
  const fetchYoutube = async () => {
    const response = await axios.get(url).catch((err) => console.error(err))
    dispatch(setYoutube(response.data.items))
  }

  //컴포넌트 생성시 fetchYoutube를 호출에 reducer에 해당 데이터 전달
  useEffect(() => {
    fetchYoutube()
  }, [])

  return (
    <section className="video myScroll">
      <div className="inner">
        <div id="section__title">
          <h1>FEATURED PROJECT</h1>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis
          </p>
        </div>
        <div className="video__box" style={{ flex: 'wrap' }}>
          {vidData.map((video, index) => {
            if (index < 6) {
              return (
                <Link to="/youtube" key={index}>
                  <img src={video.snippet.thumbnails.medium.url} alt="video" />
                </Link>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Video
