import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = (props) => {
  let lan;

  props.isOnline ? (lan = <Online />) : (lan = <Offline />);

  return <div className="status">{lan}</div>;
}

export default Status;
