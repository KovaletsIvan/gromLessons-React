import React, { useEffect, useState } from "react";

const Dimensions = () => {
  const { innerHeight, innerWidth } = window
  const [dimantion, setDimantion] = useState({
    width: null,
    height: null
  })


  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimantion({
      width: innerWidth,
      height: innerHeight
    })
    const hendleResize = (e) => {
      const { innerWidth, innerHeight } = e.target
      setDimantion({
        width: innerWidth,
        height: innerHeight
      })
    }
    window.addEventListener('resize', hendleResize)

    return () => {
      window.removeEventListener('resize', hendleResize)
    }
  }, [])




  const { width, height } = dimantion

  return (
    <div className="dimensions">{`${width}px - ${height}px`}</div>
  )
}

export default Dimensions