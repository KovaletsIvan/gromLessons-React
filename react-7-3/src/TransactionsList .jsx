import React from 'react';
import Transaction from './Transaction';


class TransactionsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <ul className="transactions">
        {this.props.transactions.slice().map(action => <Transaction key={action.id} {...action} />)}
      </ul>
    )
  }
}


export default TransactionsList



