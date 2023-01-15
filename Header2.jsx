import React from 'react'
import "./Header.css"
import image from "./images.png"

function Header2() {
  return (
    <>
        <div className="container">
        <div className="main">
        <img src={image} alt="mypic" />
            <h1>RC Note</h1>
        </div>
        </div>
    </>
  )
}

export default Header2