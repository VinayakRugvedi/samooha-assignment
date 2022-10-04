import React, { useState, useEffect } from "react"
import {FaEye, FaEyeSlash} from "react-icons/fa"

import "./Password.css"

interface PropTypes {
  label?: string
  placeHolder?: string
  isRequired?: boolean
  value?: string
  errorString?: string
  handleChange?: (value: string) => void
  style?: object
}

const Password = ({
  label = "",
  placeHolder = "",
  isRequired = false,
  value = "",
  errorString = "",
  handleChange = () => {},
  ...rest
}: PropTypes) => {
  const [passwordString, setPasswordString] = useState("")
  const [canShow, setCanShow] = useState(false)
  useEffect(() => {
    setPasswordString(value)
  }, [value])

  const toggleCanShow = () => {
    setCanShow(previous => !previous)
  }

  const isErrorPresent = errorString.length > 0

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setPasswordString(value)
    handleChange(value)
  }

  return (
    <div className="custom-password-input-container">
      <label>
        <div className="label-text">
          {label}
          {isRequired && <span>*</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input"
            type={canShow ? "text" : "password"}
            onChange={onChange}
            placeholder={placeHolder}
            value={passwordString}
            {...rest}
          />
          <div
            className="eye-icon-container"
            role="button"
            onClick={toggleCanShow}
          >
            {canShow ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <div
          className={`error-text visibility-${
            isErrorPresent ? "visible" : "hidden"
          }`}
        >
          {isErrorPresent ? errorString : "placeholder"}
        </div>
      </label>
    </div>
  )
}

export default Password
