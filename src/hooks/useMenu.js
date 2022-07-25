import { useState, useEffect } from "react"
export const useMenu = () => {
  const [isActive, setIsActive] = useState(false)

  const handlerActive = () => {
    setIsActive(!isActive)
  }

  return { isActive, handlerActive }
}
