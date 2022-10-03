import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"

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
        {JSON.stringify(this.props.args)}
        <Signup data={data} />
      </div>
    )
  }
}

export default withStreamlitConnection(App)
