import React, { Component} from 'react';
import '../index.css'

class CounterPlus extends Component {

  increasePlusAction(){
    this.props.actions.increasePlusAction();
  }

  decreasePlusAction(){
    this.props.actions.decreasePlusAction();
  }

  render(){
    return(
      <div>
        <button className="buttons" onClick={()=>this.increasePlusAction()}>+</button>
        <span className='count'>Count:{this.props.countPlusValue}</span>
        <button className="buttons" onClick={()=>this.decreasePlusAction()}>-</button>

      </div>
    )
  }

}

export default CounterPlus
