import React from 'react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setMembers } from '../../redux/actions'

function About() {
  const path = process.env.PUBLIC_URL
  const frame = useRef(null)
  const members = useSelector((state) => state.memberReducer.members)
  const dispatch = useDispatch()

  useEffect(() => {
    frame.current.classList.add('on')
  }, [])

  return (
    <>
      <main className="about">
        <div className="sub__visual">
          <div className="inner">
            <div className="slogan">
              <h1>
                <div className="title">ABOUT US</div>
              </h1>
              <h2>
                <div className="subtitle">GUSTAV CALATRAVA</div>
              </h2>
            </div>
          </div>
        </div>

        <div className="contents" ref={frame}>
          <section className="about__project">
            <div className="inner">
              <div className="text__box">
                <h2>
                  120+ PROJECTS<br></br>
                  ALL OVER THE WORLD
                </h2>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                  nibh vulputate cursus a sit amet mauris.
                </p>
              </div>
            </div>

            <div className="slider">
              <div className="slider__wrapper">
                <div>
                  <img src={path + '/img/about-slider-img-01.jpg'} alt="" />
                </div>
                <div>
                  <img src={path + '/img/about-slider-img-02.jpg'} alt="" />
                </div>
                <div>
                  <img src={path + '/img/about-slider-img-03.jpg'} alt="" />
                </div>
                <div>
                  <img src={path + '/img/about-slider-img-04.jpg'} alt="" />
                </div>
              </div>
            </div>

            <div className="bg-grid">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </section>

          <section className="about__info">
            <div className="inner">
              <div className="info__wrapper">
                <article>
                  <span>01</span>
                  <h2>THE BEST IDEAS</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    adipisicing elit.
                  </p>
                </article>
                <article>
                  <span>02</span>
                  <h2>PASSION & WORK</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    adipisicing elit.
                  </p>
                </article>
                <article>
                  <span>03</span>
                  <h2>TRULY CREATIVE</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    adipisicing elit.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="about__team">
            <div className="inner">
              <div className="title__wrapper">
                <h2>BEST OUR TEAM</h2>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis
                </p>
              </div>

              <div className="team__wrapper">
                {members.map((member, index) => {
                  return (
                    <article key={index} className="team__list">
                      <div className="team__info">
                        <h3 className="team__name">{member.name}</h3>
                        <h4 className="team__position">{member.position}</h4>
                      </div>

                      <figure className="team__img">
                        <img src={path + member.image} alt={member.alt} />

                        <ul className="team__sns">
                          <li>
                            <Link to="/">
                              <i className="fab fa-tumblr"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fab fa-github-alt"></i>
                            </Link>
                          </li>
                        </ul>
                      </figure>
                    </article>
                  )
                })}
              </div>
              <button
                onClick={() => {
                  const newMembers = [...members]
                  newMembers[0] = {
                    name: 'Julia',
                    position: 'Vice President',
                    image: '/img/about-team-img-01.jpg',
                    alt: 'Team1',
                  }
                  dispatch(setMembers(newMembers))
                }}
              >
                맴버 변경
              </button>
            </div>

            <div className="bg-grid">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default About
