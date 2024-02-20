import React, { Component } from 'react'
import loading from './loading.gif'
import './loading.css'

export class Spinner extends Component {
  render() {
    
    return (
      <div className='text-center'>
        <img src={loading} alt="" className="img-spinner" />
      </div>
    )
  }
}

export default Spinner