/*MODULES*/
import React from "react"
/*COMPONENTS*/
import Title from "./Title"
import Tag from "./Tag"
import MainImage from "./MainImage"
/*CSS*/
import "../assets/css/header.css"

const Header = ({ title, img, description, tag }) => {
  return (
    <header className="header">
      <MainImage img={img} alt={description} />
      <div className="header-content">
        {tag && <Tag tag={tag} />}
        <Title title={title} />
      </div>
    </header>
  )
}

export default Header
