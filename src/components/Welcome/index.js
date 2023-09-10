import {Component} from 'react'

class MyComponent extends Component {
  render() {
    const {name} = this.props
    return <h1> Hi, {name} I'm Class Component </h1>
  }
}

export default MyComponent
