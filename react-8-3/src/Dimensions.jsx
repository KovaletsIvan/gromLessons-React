
import React from 'react';

class Dimensions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: innerWidth,
      height: innerHeight
    }

  }

  componentDidMount() {
    this.onResize = (e) => {
      const { innerWidth, innerHeight } = e.target
      this.setState({
        width: innerWidth,
        height: innerHeight
      })
    }
   window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  render() {
    document.title = `${this.state.width} x ${this.state.height}`
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
    )
  }
}



export default Dimensions



