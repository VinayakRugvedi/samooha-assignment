import {
    StreamlitComponentBase,
    withStreamlitConnection,
  } from "streamlit-component-lib"
import React, {ReactNode} from "react"

import Signup from "./Signup"

interface Props {

}

class SignupContainer extends StreamlitComponentBase<Props> {
    render ():ReactNode {
        return (
            <div>
                <Signup />
            </div>
        )
    }
}

export default withStreamlitConnection(SignupContainer)