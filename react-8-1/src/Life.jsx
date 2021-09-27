import React from 'react';
import Btn from './Btn';



class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: this.props.num
    }
    console.log('constructor: good place to create state')

  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions')
  }

  shouldComponentUpdate(nexProps, nextState) {
    console.log('shouldComponentUpdate(nexProps, nextState):decide to render or not to render')
    return nexProps
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState):some updates based on new props')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount():cleanup before DOM related to component will be remowed')
  }
  actionAdd = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    console.log('return React element to build DOM')
    return (
      <div className='.pagination'>
        <Btn actionAdd={this.actionAdd} />
        <div className="number">{this.state.num}</div>
      </div>
    )

  }
}



export default Life



