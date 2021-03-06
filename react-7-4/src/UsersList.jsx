import React from 'react';
import Pagination from './Pagination';
import User from './User';


class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
      step: 0,
    }
  }

  goPrev = () => {
    this.setState({
      step: this.state.step - this.state.itemsPerPage,
      currentPage: this.state.currentPage - 1,
    })
  }
  goNext = () => {
    this.setState({
      step: this.state.step + this.state.itemsPerPage,
      currentPage: this.state.currentPage + 1,
    })
  }
  render() {
    let divArr = this.state.currentPage === 1 ?
      this.props.users.slice(0, this.state.itemsPerPage) :
      this.props.users.slice(this.state.step, this.state.itemsPerPage * this.state.currentPage)

      const result = divArr.map(action => <User key={action.id} {...action} />)

    return (

      <div>
        <Pagination
          itemsPerPage={this.state.itemsPerPage}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          goPrev={this.goPrev}
          goNext={this.goNext}
        />
        <ul className="users">
          {result}
        </ul>
      </div>

    )
  }

}



export default UsersList



