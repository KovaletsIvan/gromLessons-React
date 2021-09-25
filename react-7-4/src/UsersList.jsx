import React from 'react';
import Pagination from './Pagination';
import User from './User';


class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    }
  }
  dividedArr = () => {
    const arr = [null];
    for (let i = 0; i < this.props.users.length; i = i + this.state.itemsPerPage) {
      arr.push(this.props.users.slice(i, i + this.state.itemsPerPage))
    }
    return arr
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    })
  }
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }
  render() {
    let valueOfCuretPage = this.dividedArr()[this.state.currentPage].slice().map(action => <User key={action.id} {...action} />)
    return (
      <div>
        <Pagination
          itemsPerPage={this.state.itemsPerPage}
          curentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          goPrev={this.goPrev}
          goNext={this.goNext}
        />
        <ul className="users">
          {valueOfCuretPage}
        </ul>
      </div>

    )
  }

}



export default UsersList



