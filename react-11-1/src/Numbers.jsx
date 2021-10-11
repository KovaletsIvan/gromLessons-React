import React from "react";
import ProtoType from 'proto-type'

class Numbers extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

Numbers.ProtoType = {
  title: ProtoType.string,
  number: ProtoType.number.isRequired
}

Numbers.defaultProps = {
  title: 'Some number',

}


export default Numbers