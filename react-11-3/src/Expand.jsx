import React from "react";


class Expand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }
  hendelClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    const arrow = this.state.isVisible ?
      <i className="fas fa-chevron-up"></i>
      : <i className="fas fa-chevron-down"></i>

    const content = this.state.isVisible ?
      <div className="expand__content">
        {this.props.children}
      </div> :
      null
    return (

      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.hendelClick}>
            {arrow}
          </button>
        </div>
        {content}
      </div>


    )
  }

}




export default Expand