/*MODULES*/
import React from "react"

/*COMPONENTS*/
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Content from "./Content"

/*CSS*/
import "../assets/css/normalize.css"
import "../assets/css/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">
        <Content>{children}</Content>
        <Sidebar />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
