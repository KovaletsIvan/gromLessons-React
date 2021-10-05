
import React from 'react';
import User from './User';
// import Filter from './Filter';

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
        <div className="filter">
          <span className="filter__count">{count}</span>
          <input type="text" className="filter__input"
            onChange={this.handleFilterText}
            value={this.state.filterText} />
        </div>
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



