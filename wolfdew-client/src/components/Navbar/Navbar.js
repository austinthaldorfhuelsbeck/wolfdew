import { useState } from "react"

import "./Navbar.css"

export default function NavBar() {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <nav className="navbar-items">
      <h4 className="navbar-logo">
        <img
          src="https://wolfdew.s3.us-west-2.amazonaws.com/img/wolfdew-logo-full45.png"
          alt="WolfDew"
        />
      </h4>
      <div className="menu-icon" onClick={handleClick}>
        <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={toggle ? "nav-menu active" : "nav-menu"}>
        <li>
          <h5 className="nav-link brand-color">
            Help & Support <i className="fas fa-caret-down"></i>
          </h5>
        </li>
        <li>
          <h5 className="nav-link">
            USER_NAME <i className="fas fa-caret-down"></i>
          </h5>
        </li>
      </ul>
    </nav>
  )
}
