import React, { Component } from 'react'
import { UserConsumer } from './Context';

 class componentf extends Component {
  render() {
   return(
    <UserConsumer>
    {
        (name)=>{
            return <h1>componentf {name}</h1>

        }
    }
    </UserConsumer>
   )
  }
}

export default componentf