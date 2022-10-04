import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./App.css"
import Signup from "./Signup"

interface PropTypes {
  args: {
    data: {
      "title_text": string;
      "tos_link": string;
      "privacy_link": string; 
    };
  };
}

class App extends StreamlitComponentBase<PropTypes> {
  public render = (): ReactNode => {
    const {data} = this.props.args

    return (
      <div className="app-container">
        <Signup data={data} />
        <ToastContainer />
      </div>
    )
  }
}

export default withStreamlitConnection(App)
