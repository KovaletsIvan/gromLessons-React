import React from "react";

class Filter extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div className="filter">
        <span className="filter__count">5</span>
        <input type="text" className="filter__input" value="a" />
      </div>
    )
  }
}
export default Filter