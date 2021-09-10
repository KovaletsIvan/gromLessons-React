import React from "react";



class Colors extends React.Component {

  setBodyColor(color) {
    document.body.style.backgroundColor = color
  }

  render() {
    return <>
      <button className="colors__button"
        style={{ backgroundColor: 'red' }}
        onClick={() => { this.setBodyColor('red') }}
      >
      </button>
      <button className="colors__button"
        style={{ backgroundColor: 'green' }}
        onClick={() => { this.setBodyColor('green') }}
      ></button>
      <button className="colors__button"
        style={{ backgroundColor: 'blue' }}
        onClick={() => { this.setBodyColor('blue') }}
      ></button>
    </>
  }

}

export default Colors