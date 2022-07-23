import { useState } from "react"
export const useMenu = () => {
  const [isActive, setIsActive] = useState(false)

  const handleractive = () => {
    console.log(isActive)
    setIsActive(!isActive)
  }

  return { isActive, handleractive }
}
