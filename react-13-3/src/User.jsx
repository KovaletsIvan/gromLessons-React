import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    this.getData(this.props.match.params.userId);
  }
  componentDidUpdate(privProps) {
    if (this.props.match.params.userId !== privProps.match.params.userId) {
      this.getData(this.props.match.params.userId);
    }
  }
  getData = (id) => {
    fetch(`https://api.github.com/users/${id}`)
      .then((respose) => respose.json())
      .then((result) => {
        this.setState({
          data: result
        });
      });
  };
  render() {

    const { name, location, avatar_url } = this.state.data;
    return (
      <div div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
