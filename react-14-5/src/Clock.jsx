import React, { useEffect, useState } from "react";
import moment from "moment";

const timeFormat = (date) => moment(date).format('LTS')

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeFormat(new Date(getTimeWithOffset(offset))))
    }, 1000)
    return () => clearInterval(interval)
  }, [offset])



  return (
    <div className="clock">
      <div className="clock__location">
        {location}
      </div>
      <div className="clock__time">
        {time}
      </div>
    </div>
  )
}

export default Clock