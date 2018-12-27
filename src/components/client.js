
import React, { Component} from 'react'

class Client extends Component {


  addClient(e){
    e.preventDefault()
  }

  render() {

    var clientList = this.props.clientList.map((client)=>(
      <li>{client.name}</li>
    ))

    return(
      <div>
       {clientList}
       <form onSubmit={this.addClient}>
        <input
          type="text"
          ref={(e)=>this._name = e} />

       </form>
       </div>
    )
  }

}

export default Client
