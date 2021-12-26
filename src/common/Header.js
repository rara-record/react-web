import { NavLink } from 'react-router-dom'

function Header() {
  const active = { color: 'aqua' }

  return (
    <header>
      <div className="inner">
        <h1>
          <NavLink exact to="/">
            DCODELAB
          </NavLink>
        </h1>

        <ul id="gnb">
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
