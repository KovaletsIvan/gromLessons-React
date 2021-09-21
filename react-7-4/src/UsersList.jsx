import React from 'react';
import Pagination from './Pagination';
import User from './User';



class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curentPage: 1
    }
  }
  changePage = () => {

  }


  goPrev = () => {
    if (current_page > 1) {
      current_page--;
      changePage(current_page);
    }
  }
  goNext = () => {
    if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
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
          {this.props.users.slice().map(action => <User key={action.id} {...action} />)}
        </ul>
      </div>

    )
  }

}



export default UsersList



