/*MODULES*/
import React from "react"

/*COMPONENTS*/
import Logo from "./Logo"
import Menu from "./Menu"
import MenuIcon from "./MenuIcon"

/*CSS*/
import "../assets/css/navbar.css"
import { useMenu } from "../hooks/useMenu"

const Navbar = () => {
  const { isActive, handleractive } = useMenu()
  return (
    <div className="navbar">
      <Logo />
      <Menu isActive={isActive} />
      <MenuIcon
        color="#000000"
        handleractive={handleractive}
        isActive={isActive}
      />
    </div>
  )
}

export default Navbar
