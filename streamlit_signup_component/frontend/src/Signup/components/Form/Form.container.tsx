import React, {useState} from "react";

import Form from "./Form"

interface PropTypes {
  tos_link: string;
  privacy_link: string;
}

export const FormNameTypes = {
  AccountLocator: "accountLocator",
  Username: "username",
  Password: "password"
}

const FormContainer = ({
  tos_link,
  privacy_link
}: PropTypes) => {
  const [formData, setFormData] = useState({
    [FormNameTypes.AccountLocator]: {
      placeHolder: "Account Locator",
      value: "",
      errorString: ""
    },
    [FormNameTypes.Username]: {
      placeHolder: "Username",
      value: "",
      errorString: ""
    },
    [FormNameTypes.Password]: {
      placeHolder: "Password",
      value: "",
      errorString: ""
    }
  })

  const handleUpdate = (name: string, value: string): void => {
    const formDataCopy = {...formData}
    formDataCopy[name].value = value
    formDataCopy[name].errorString = ""

    if (value.length === 0) {
      formDataCopy[name].errorString = "This field cannot be empty."
      setFormData(formDataCopy)
      return
    }

    if (name === FormNameTypes.AccountLocator && value.length > 12) {
      formDataCopy[name].errorString = "Account Locator cannot exceed 12 characters."
    } else if (name === FormNameTypes.Username && value.length < 5) {
      formDataCopy[name].errorString = "Username should be at least 5 characters."
    } else if (name === FormNameTypes.Password && value.length < 8) {
      formDataCopy[name].errorString = "Password should be at least 8 characters."
    }

    setFormData(formDataCopy)
  }

  const handleSubmit = (): void => {
    // handleSubmit
  }

  return (
    <Form
      formData={formData}
      handleUpdate={handleUpdate}
      handleSubmit={handleSubmit}
      tos_link={tos_link}
      privacy_link={privacy_link}
    />
  )
}

export default FormContainer