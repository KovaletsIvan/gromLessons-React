import React from "react";
import moment from "moment";

const Transaction = ({ from, to, amount, rate, time }) => {
  const numberFormater = new Intl.NumberFormat('en-GB').format(amount)
  const timeMomentDate = moment(time).format('DD MMM')
  const timeMomentTime = moment(time).format('h:mm')

  return (
    <li className="transaction">
      <span className="transaction__date">{timeMomentDate}</span>
      <span className="transaction__time">{timeMomentTime}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{numberFormater}</span>
    </li>
  )
}

export default Transaction