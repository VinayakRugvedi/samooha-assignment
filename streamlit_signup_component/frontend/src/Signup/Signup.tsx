import React from "react"

import Logo from "./assets/logo.png"
import "./Signup.css"

interface PropTypes {
  data: {
    "title_text": string;
    "tos_link": string;
    "privacy_link": string; 
  };
}

const Signup = ({data}: PropTypes) => {
  const {
    title_text,
    tos_link,
    privacy_link
  } = data

  return (
    <div className="signup-container">
      <header className="header-container">
        <img
          className="logo-image"
          src={Logo}
          alt="SAMOOHA"
        />
        <h3 className="title-text">{title_text}</h3>
      </header>

      <main>Hello</main>

      
    </div>
  )
}

export default Signup
