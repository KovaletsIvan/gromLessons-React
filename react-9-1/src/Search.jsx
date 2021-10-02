
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
    e.persist()
    alert(`Search text: ${this.state.text}`)
  }

  listenInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {

    return (
      <form className="search" onSubmit={this.clickHendle}>
        <input type="text" className="search__input" onChange={this.listenInput} value={this.state.text} />
        <button className="search__button" type="submit">Search</button>
      </form>
    )
  }
}



export default Search



