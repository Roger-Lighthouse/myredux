import React, { Component } from 'react'

class ConnCall extends Component{

  constructor(props){
    super(props)
    this.state = {
      conn_calls: []
    }
  }

  componentDidMount(){
    this.props.actions.fetchConnCalls()
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      conn_calls: nextProps.connCalls
    })
  }


  render(){
    let calls_test = null
    if(this.state.conn_calls){
      console.log('state.conn_calls ' ,this.state.conn_calls)
      const data = this.state.conn_calls
      calls_test = data.map(client=>{
        console.log("CC ", client)
        return <li key={client.cfid}>
                  {client.cfid}&nbsp;
                  {client.name}&nbsp;
                  {client.address}&nbsp;
                  {client.phone}&nbsp;
               </li>
      }
      )
    }

    return <div>{calls_test}</div>
  }

}

export default ConnCall
