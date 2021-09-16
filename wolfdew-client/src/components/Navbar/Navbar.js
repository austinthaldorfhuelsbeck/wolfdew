import { useState } from "react"

import { MenuItems } from "../MenuItems"
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
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
