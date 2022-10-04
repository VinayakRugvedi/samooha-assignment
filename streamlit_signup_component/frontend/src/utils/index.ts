import { toast } from "react-toastify"
import { ToastTypes } from "types"

const triggerToast = (message: string, type: any = ToastTypes.Success) => {
  const options = {
    type,
    position: toast.POSITION.TOP_RIGHT,
  }

  toast(message, options)
  return
}

export { triggerToast }
