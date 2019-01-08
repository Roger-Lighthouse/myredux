import React, { Component } from 'react'

class Stats extends Component {

  constructor(props){
    super(props)
    this.padDigits = this.padDigits.bind(this)
  }

  componentDidMount(){
      setInterval(()=>{
      this.props.actions.showStats({
        sales: this.props.sales + 1,
        prod: this.props.prod + 100,
        smoke: this.props.smoke + 25
      })
    }, 10000)
    setInterval(()=>{this.props.actions.showClock()}, 1000)
  }

  padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
  }

  render() {
    var date = "Time: " +
    this.padDigits(this.props.hours.toString(), 2) + ':' +
    this.padDigits(this.props.minutes.toString(), 2) + ':' +
    this.padDigits(this.props.seconds.toString(), 2)

    return(
      <div>
        <h1>{ date }</h1>
        <h1>Sales:{this.props.sales} Prod:{this.props.prod} Breaks:{this.props.smoke}</h1>
      </div>
    )
  }
}

export default Stats
