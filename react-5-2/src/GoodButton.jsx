import React from "react";

class GoodButton extends React.Component {
  handelClick(e) {
    console.log(e.target.textContent)
    alert('Good job!')
  }
  render() {
    return (
      <button className="fancy-button"
        onClick={this.handelClick} >
        Click mi!
      </button>
    )
  }
}


export default GoodButton