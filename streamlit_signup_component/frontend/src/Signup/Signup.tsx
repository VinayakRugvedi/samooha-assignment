import React from "react"

import Form from "./components/Form"
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

      <main>
        <div className="form-container">
          <Form
            tos_link={tos_link}
            privacy_link={privacy_link}
          />
        </div>
      </main>

      <div className="note-container">
        <p className="note-text">Note: You can later login to Samooha as a <br/> <strong>provider</strong> or <strong>consumer</strong></p>
      </div>
      
    </div>
  )
}

export default Signup
