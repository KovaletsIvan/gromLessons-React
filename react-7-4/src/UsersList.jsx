import React from 'react';
import Pagination from './Pagination';
import User from './User';


class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curentPage: 1,
    }
  }
  changePage = () => {
    let result;
    if (this.state.curentPage === 1) {
      result = (this.props.users.slice(0, 3).map(action => <User key={action.id} {...action} />))
    }

    if (this.state.curentPage === 2) {
      result = (this.props.users.slice(3, 6).map(action => <User key={action.id} {...action} />))
    }
    return result;
  }

  numPages=()=>{
    return this.props.users.length / itemsPerPage
  }

  goPrev = () => {
    if (this.state.curentPage > 1) {
      this.setState({
        curentPage: this.curentPage - 1
      })

      this.changePage();
    }
  }
  goNext = () => {
    if (this.state.curentPage < numPages()) {
      this.setState({
        curentPage: this.state.curentPage + 1
      })
      this.changePage();
    }
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
          {this.changePage()}
        </ul>
      </div>

    )
  }

}



export default UsersList



