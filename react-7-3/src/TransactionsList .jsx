import React from 'react';
import Transaction from './Transaction';


const TransactionsList = (props) => {

  return (
    <ul className="transactions">
      {props.transactions.slice().map(action => <Transaction key={action.id} {...action} />)}
    </ul>
  )
}



export default TransactionsList



