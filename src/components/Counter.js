import React, { Component} from 'react';
import '../index.css'
import CounterPlus from '../containers/counter-plus-container'

class Counter extends Component{

  increaseAction(){
    this.props.actions.increaseAction()
  }

  decreaseAction(){
    this.props.actions.decreaseAction()
  }

  render(){
    return(
      <div>
        <button className='buttons' onClick={()=>this.increaseAction()}>+</button>
          <span className='count'>Count:{this.props.countValue}</span>
        <button className='buttons' onClick={()=>this.decreaseAction()}>-</button><br/><br/><br/>
        <CounterPlus />
      </div>
    )
  }
}

export default Counter
