import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const active = { color: 'aqua' }
  const [state, setstate] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    window.scrollY > 120 ? setstate(true) : setstate(false)
  }

  return (
    <header className={`header ${state ? 'whiteBg' : 'transparent'}`}>
      <div className="inner">
        <h1>
          <NavLink exact to="/">
            DCODELAB
          </NavLink>
        </h1>

        <ul id="gnb" className="lg-only">
          <li>
            <NavLink activeStyle={active} exact to="/department">
              DEPARTMENT
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} exact to="/BOARD">
              BOARD
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} exact to="/GALLERY">
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} exact to="/YOUTUBE">
              YOUTUBE
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} exact to="/LOCATION">
              LOCATION
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={active} exact to="/MEMBERSHIP">
              MEMBERSHIP
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
