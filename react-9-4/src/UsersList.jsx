
import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: this.props.users,
      filterText: '',
    }
  }
  handleFilterText = (e) => {
    this.setState({
      filterText: e.target.value,

    })

  }

  render() {
    let users
    let result
    let count
    users = users ? users :
      this.props.users
    if (users) {
      result = users.filter(elem => elem.name.toLowerCase()
        .includes(this.state.filterText.toLocaleLowerCase()))
    }
    count = result.length === this.props.users.length ? '' : result.length

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={count}
          onChange={this.handleFilterText}
        />
        {result
          .map(elem => <User
            key={elem.id}
            name={elem.name}
            age={elem.age} />)}
      </div>
    )
  }
}



export default UsersList



