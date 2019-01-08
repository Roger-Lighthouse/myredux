import React, {Component} from 'react'

class ClientAddClient extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      phone: ''
    }

    this.updateName = this.updateName.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.updatePhone = this.updatePhone.bind(this)
    this.addClient = this.addClient.bind(this)



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

  addClient(e){
    this.props.addClient(this._name.value, this._address.value, this._phone.value)
    this._name.value=""
    this._address.value=""
    this._phone.value=""
    e.preventDefault()
  }


  render(){
    return(
      <div>
        <form onSubmit={this.addClient}>
         <input
           type="text"
           placeholder="Enter Name"
           onChange={this.updateName}
           ref = {(e)=>this._name = e}
         />
         <input
           type="text"
           placeholder="Enter Address"
           onChange={this.updateAddress}
           ref = {(e)=>this._address = e}
         />
         <input
           type="text"
           placeholder="Enter Phone"
           onChange={this.updatePhone}
           ref = {(e)=> this._phone = e}
         />
         <button type="submit">Add Client</button>
       </form>
     </div>
    )
  }
}

export default ClientAddClient
