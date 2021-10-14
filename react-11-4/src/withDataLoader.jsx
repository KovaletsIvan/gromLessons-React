import React from 'react';

export const withDataLoader = (WrapedComponent) => {
  class WithDataLoader extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: null
      }
    }
    componentDidCatch() {
      this.getData(this.props.url)
    }
    getData = (url) => {
      fetch(url)
        .then(respose => respose.json())
        .then(result => {
          this.setState({
            data: result
          })
        })
    }

    render() {
      // if(!this.state.data){
      //   return null
      // }
      return <WrapedComponent data={this.state.data} />
    }
  }
  return WithDataLoader
}

