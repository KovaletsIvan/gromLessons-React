import React from 'react';
import Pagination from './Pagination';
import User from './User';


class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curentPage: 1,
      splittedArr: this.divided
    }
  }
  divided = () => {
    const arr = [0];
    for (let i = 0; i < this.props.users.length; i = i + 3) {
      arr.push(this.props.users.slice(i, i + 3))
    }
    return arr
  }

  goPrev = () => {
    this.setState({
      curentPage: this.state.curentPage - 1
    })
  }
  goNext = () => {
    this.setState({
      curentPage: this.state.curentPage + 1
    })
  }
  render() {

    return (
      <div>
        <Pagination
          itemsPerPage={3}
          curentPage={this.state.curentPage}
          totalItems={this.props.users.length}
          goPrev={this.goPrev}
          goNext={this.goNext}
        />
        <ul className="users">
          {this.state.splittedArr()[this.state.curentPage].slice().map(action => <User key={action.id} {...action} />)}
        </ul>
      </div>

    )
  }

}



export default UsersList



