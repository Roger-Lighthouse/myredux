import React, { Component} from 'react';
import '../index.css'
import CounterPlus from '../containers/CounterPlusContainer'

class Counter extends Component{

  increaseAction(){
    this.props.actions.increaseAction()
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <button className='buttons' onClick={()=>this.increaseAction()}>+</button>
          <span className='count'>Count:{this.props.countValue}</span>
        <button className='buttons' onClick={this.props.actions.decreaseAction}>-</button><br/><br/><br/>
        <CounterPlus />
      </div>
    )
  }
}

export default Counter
