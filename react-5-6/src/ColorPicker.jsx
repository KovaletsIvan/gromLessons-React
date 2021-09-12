import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }
  toggleColors(e) {
    const event = e.target.name;
    this.setState({
      color: event,
    });

  }
  clear() {
    this.setState({
      color: ''
    })
  }
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            name="Coral"
            onMouseOver={this.toggleColors.bind(this)}
            onMouseOut={this.clear.bind(this)}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            name="Aqua"
            onMouseOver={this.toggleColors.bind(this)}
            onMouseOut={this.clear.bind(this)}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            name="Bisque"
            onMouseOver={this.toggleColors.bind(this)}
            onMouseOut={this.clear.bind(this)}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
