/*MODULES*/
import React from "react"
/*COMPONENTS*/
import { Link } from "gatsby"
/*CSS*/
import "../assets/css/menu.css"

const munuItems = ["home", "about", "contact"]

const Menu = ({ isActive, handlerActive }) => {
  const menuRef = React.useRef()

  React.useEffect(() => {
    isActive
      ? menuRef.current.classList.add("active")
      : menuRef.current.classList.remove("active")
  }, [isActive])

  return (
    <nav className="menu-container" ref={menuRef}>
      {munuItems.map((el, index) => {
        return (
          <ul key={index}>
            <li>
              <Link to={el === "home" ? "/" : `/${el}`}>{el}</Link>
            </li>
          </ul>
        )
      })}
    </nav>
  )
}

export default Menu
