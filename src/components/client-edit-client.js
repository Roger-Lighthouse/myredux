import React, {Component} from 'react'

class ClientEditClient extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.client.name,
      address: props.client.address,
      phone: props.client.phone
    }

    this.updateName = this.updateName.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.updatePhone = this.updatePhone.bind(this)
    this.editClient = this.editClient.bind(this)

  }

  updateName(e){
    this.setState({
      name: e.target.value
    })
  }

  updateAddress(e){
    this.setState({
      address: e.target.value
    })
  }

  updatePhone(e){
    this.setState({
      phone: e.target.value
    })
  }

  editClient(e){
    e.preventDefault()
    this.props.editClient(this.props.client.id, this.state.name, this.state.address, this.state.phone)
    this._name.value=""
    this._address.value=""
    this._phone.value=""
  }


  render(){
    return(
      <div>
        <b>Edit Client</b>
        <form onSubmit={this.editClient}>
         <input
           type="text"
           value = {this.state.name}
           onChange={this.updateName}
           ref = {(e)=>this._name = e}
         />
         <input
           type="text"
           value = {this.state.address}
           onChange={this.updateAddress}
           ref = {(e)=>this._address = e}
         />
         <input
           type="text"
           value = {this.state.phone}
           onChange={this.updatePhone}
           ref = {(e)=> this._phone = e}
         />
         <button type="submit">Edit Client</button>
       </form><br/><br/>
     </div>
    )
  }
}

export default ClientEditClient
