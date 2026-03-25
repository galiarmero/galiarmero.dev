import { useState, useEffect } from "react"

export default function usePageHasBeenVisible() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (document.visibilityState === "visible") {
      setIsVisible(true)
    } else {
      const onVisible = () => {
        if (document.visibilityState === "visible") {
          setIsVisible(true)
          document.removeEventListener("visibilitychange", onVisible)
        }
      }
      document.addEventListener("visibilitychange", onVisible)
      return () => document.removeEventListener("visibilitychange", onVisible)
    }
  }, [])

  return isVisible
}
