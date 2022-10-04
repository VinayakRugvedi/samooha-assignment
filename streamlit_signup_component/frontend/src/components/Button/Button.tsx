import React, { ReactNode } from "react"

import "./Button.css"

interface PropTypes {
  type?: string;
  children: ReactNode;
  handleClick: () => void;
  isDisabled?: boolean;
}

const Button = ({
    type = "primary",
    children,
    handleClick,
    isDisabled = false,
    ...rest
}: PropTypes) => {
  const onClickHanlder = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleClick()
  }

  return (
    <div className="custom-button-container">
      <button
        className={`custom-button custom-button-${type}`}
        onClick={onClickHanlder}
        disabled={isDisabled}
        {...rest}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
