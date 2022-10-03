import React, { ReactNode } from "react"

import "./Button.css"

interface PropTypes {
  type: string;
  children: ReactNode;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled: boolean;
}

const Button = ({
    type,
    children,
    handleClick,
    isDisabled,
    ...props
}: PropTypes): ReactNode => {
  return (
    <div className="custom-button-container">
      <button
        className={`custom-button custom-button-${type}`}
        onClick={handleClick}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
