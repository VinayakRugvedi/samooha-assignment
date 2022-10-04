import React, { useState, useEffect } from "react"

import "./Text.css"

interface PropTypes {
  label?: string
  placeHolder?: string
  isRequired?: boolean
  value?: string
  errorString?: string
  handleChange?: (value: string) => void
  style?: object
}

const Text = ({
  label = "",
  placeHolder = "",
  isRequired = false,
  value = "",
  errorString = "",
  handleChange = () => {},
  ...rest
}: PropTypes) => {
  const [textString, setTextString] = useState("")
  useEffect(() => {
    setTextString(value)
  }, [value])

  const isErrorPresent = errorString.length > 0

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setTextString(value)
    handleChange(value)
  }

  return (
    <div className="custom-text-input-container">
      <label>
        <div className="label-text">
          {label}
          {isRequired && <span>*</span>}
        </div>
        <input
          type="text"
          onChange={onChange}
          placeholder={placeHolder}
          value={textString}
          {...rest}
        />
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

export default Text
