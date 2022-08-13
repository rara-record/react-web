import { NavLink } from 'react-router-dom'
import Line from './../common/Line'

function Header(props) {
  const active = { color: '#c5a47e' }

  return (
    <header className={`${props.type} myScroll `}>
      <h1 className="logo">
        <NavLink exact to="/">
          BFOLIO
        </NavLink>
      </h1>

      <ul id="gnb-desktop">
        <li>
          <NavLink activeStyle={active} exact to="/about">
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink activeStyle={active} exact to="/gallery">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={active} exact to="/community">
            Community
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={active} exact to="/youtube">
            Youtube
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={active} exact to="/Contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={active} exact to="/join">
            Join
          </NavLink>
        </li>
      </ul>

      <NavLink exact to="#" className="menu__bars">
        <i className="fas fa-bars"></i>
      </NavLink>

      <Line />
    </header>
  )
}

export default Header
