
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }

  }

  componentDidMount() {
    this.clickHendle
  }

  clickHendle = (e) => {
    e.preventDefault()
    alert(`Search text: ${this.state.text}`)
  }

  listenInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {

    return (
      <form className="search" onChange={this.listenInput}>
        <input type="text" className="search__input" value={this.state.text} />
        <button className="search__button" onClick={this.clickHendle}>Search</button>
      </form>
    )
  }
}



export default Search



