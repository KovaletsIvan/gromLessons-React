import React from 'react';
import Pagination from './Pagination';
import User from './User';


class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      itemsPerPage: 4,
      step: 0,
    }
  }


  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
      step: this.state.step + this.state.itemsPerPage
    })
  }
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
      step: this.state.step + this.state.itemsPerPage
    })
  }
  render() {
    let divArr = this.state.currentPage === 1 ?
      this.props.users.slice(0, this.state.itemsPerPage) :
      this.props.users.slice(this.state.step, this.state.itemsPerPage * this.state.currentPage);

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
          {divArr.map(action => <User key={action.id} {...action} />)}
        </ul>
      </div>

    )
  }

}



export default UsersList



