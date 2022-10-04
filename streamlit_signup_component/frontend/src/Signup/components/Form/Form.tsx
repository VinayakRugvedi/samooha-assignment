import React from "react";

import {
  Button,
  InputText,
  InputPassword
} from "components"
import {FormNameTypes} from "./Form.container"
import "./Form.css"

interface PropTypes {
  formData: object;
  handleUpdate: (name: string, value:string) => void;
  handleSubmit: () => void;
  tos_link: string;
  privacy_link: string;
}

const Form = ({
  formData,
  handleUpdate,
  handleSubmit,
  tos_link,
  privacy_link
}: PropTypes) => {
  let isButtonDisabled = false
  const formInputsContent = []
  
  for (const [name, data] of Object.entries(formData)) {
    if (!isButtonDisabled && data.value.length === 0) {
      isButtonDisabled = true
    }

    if (FormNameTypes.Password === name) {
      formInputsContent.push(
        <div className="input-wrapper">
          <InputPassword
            placeHolder={data.placeHolder}
            value={data.value}
            errorString={data.errorString}
            handleChange={(value: string) => handleUpdate(name, value)}
            style={{width: "25rem"}}
          />
        </div>
      )
    } else {
      formInputsContent.push(
        <div className="input-wrapper">
          <InputText
            placeHolder={data.placeHolder}
            value={data.value}
            errorString={data.errorString}
            handleChange={(value: string) => handleUpdate(name, value)}
            style={{width: "25rem"}}
          />
        </div>
      )
    }
  }

  return (
    <form className="signup-form-container">
      <div className="inputs-container">
        {formInputsContent}
      </div>
      <div className="terms-policy-container">
        <p className="terms-policy-text">
          By signing up, I agree to the&nbsp;
          <strong><a href={tos_link} target="_blank">Terms of Service</a></strong> and&nbsp;
          <strong><a href={privacy_link} target="_blank">Privacy Policy</a></strong>
        </p>
      </div>
      <div className="button-container">
        <Button
          handleClick={handleSubmit}
          isDisabled={isButtonDisabled}
        >
          Sign up
        </Button>
      </div>
    </form>
  )
}

export default Form