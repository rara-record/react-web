import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { menuData } from '../../data/MenuData'

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
      <h1 className="logo">
        <NavLink exact to="/">
          D.
        </NavLink>
      </h1>

      <ul id="gnb-desktop">
        {menuData.map((item, index) => {
          return (
            <li key={index}>
              <NavLink exact to={item.link} activeStyle={active}>
                {item.title}
              </NavLink>
            </li>
          )
        })}
      </ul>

      <Link to="/" className="menu__bars">
        <i className="fas fa-bars"></i>
      </Link>
    </header>
  )
}

export default Header
