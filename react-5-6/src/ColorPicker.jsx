import React from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Biscque';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: '',
    };
  }
  toggleColors = (color) => {
    this.setState({
      colorName: color,
    });

  }
  clear = () => {
    this.setState({
      colorName: ''
    })
  }
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            Coral
            onMouseOver={() => this.toggleColors(CORAL)}
            onMouseOut={() => this.clear()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.toggleColors(AQUA)}
            onMouseOut={() => this.clear()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.toggleColors(BISQUE)}
            onMouseOut={() => this.clear()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
