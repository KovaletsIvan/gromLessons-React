
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'good restaurant',
    }

  }

  componentDidMount() {
    this.clickHendle
  }

  clickHendle = (e) => {
    e.preventDefault()
    alert(`Search text: ${this.state.text}`)
  }

  listenInpat=(e)=>{
    this.setState({
     text: e.target.value 
    })
  }
  render() {

    return (
      <form className="search">
        <input type="text" className="search__input" onChange={this.listenInpat}/>
        <button className="search__button" onClick={this.clickHendle}>Search</button>
      </form>
    )
  }
}



export default Search



