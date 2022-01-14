import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function About() {
  const path = process.env.PUBLIC_URL
  const [team, setTeam] = useState([])

  useEffect(() => {
    axios.get(`${path}/db/team.json`).then((data) => {
      setTeam(data.data.data)
    })
  }, [])

  return (
    <>
      <main className="about">
        <section className="sub__visual">
          <div className="inner">
            <h1>ABOUT US</h1>
            <p>
              Property Group offers a full-service, <br></br>
              residential project development.
            </p>
          </div>
        </section>

        <div className="contents">
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
                {team.map((team, index) => {
                  return (
                    <article key={index} className="team__list">
                      <div className="team__info">
                        <h3 className="team__name">{team.name}</h3>
                        <h4 className="team__position">{team.position}</h4>
                      </div>

                      <figure className="team__img">
                        <img src={path + team.image} alt={team.alt} />

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
