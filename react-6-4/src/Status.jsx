import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }

  render() {
    let lan;
    this.state.isOnline ? (lan = <Online />) : (lan = <Offline />);
    return <div className="status">{lan}</div>;
  }
}

export default Status;
