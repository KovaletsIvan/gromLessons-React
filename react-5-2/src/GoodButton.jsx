import React from "react";

class GoodButton extends React.Component {
  handelClick(e) {

    alert(e.target.textContent)
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