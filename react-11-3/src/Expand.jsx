import React from "react";
import PropTypes from "prop-types"

const Expand = ({ children, isVisible, title, onClick }) => {
  const visibility = isVisible ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>
  return (
    <div className="app">

      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={onClick}>
            {visibility}
          </button>
        </div>

        {children}

      </div>
    </div>

  )
}

Expand.PropTypes = {
  children: PropTypes.element.isRequired,
  isVisible: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

Expand.defaultProp = {
  title: 'Some other text!',
  isVisible: false
}


export default Expand