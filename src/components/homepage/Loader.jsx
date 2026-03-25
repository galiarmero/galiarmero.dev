import React, { useEffect } from "react"
import Logo from "./Logo"

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 0)
    return () => clearTimeout(timeout)
  }, [finishLoading])

  return (
    <div>
      <div className="loader-box">
        <div className="loader-content">
          <div className="loader-circle" />
          <div className="loader-line-mask">
            <div className="loader-line" />
          </div>
          <Logo style={{ height: 60, width: 32 }} />
        </div>
      </div>
    </div>
  )
}

export default Loader
