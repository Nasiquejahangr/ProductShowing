import React, { Component } from 'react'
import { useState } from 'react'
export class Usecount extends Component {
  render() {
    const [count, setCount] = useState(0)
    return (
     <>
        <button>Increment</button>
     </>
    )
  }
}

export default Usecount