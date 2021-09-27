import React from 'react';



class Life extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor: good place to create state')

  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions')
  }

  shouldComponentUpdate(nexProps, nextState) {
    console.log('shouldComponentUpdate(nexProps, nextState):decide to render or not to render')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState):some updates based on new props')
  }

  render() {
    console.log('return React element to build DOM')
    return (<h1>Ivan Kovalets</h1>)

  }
}



export default Life



