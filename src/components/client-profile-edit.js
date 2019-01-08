import React, {Component} from 'react'


class ClientProfileEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      address: props.address,
      phone: props.phone,
      email: props.email
    }

    this.updateName = this.updateName.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.updatePhone = this.updatePhone.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.editClient = this.editClient.bind(this)
  }

  updateEmail(e){
    this.setState({
      email: e.target.value
    })
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
    this.props.fireEdit(this.props.cfid, this.state.name, this.state.address, this.state.phone, this.state.email)
    this._name.value=""
    this._address.value=""
    this._phone.value=""
    this._email.value=""
  }


  render(){
    return(
      <div>
        <form onSubmit={this.editClient}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td><input
               type="text"
               placeholder = "Name"
               value = {this.state.name}
               onChange={this.updateName}
               ref = {(e)=>this._name = e} />
              </td>
            </tr>
            <tr>
              <th>Billing Address</th>
              <td><input
                type="text"
                value = {this.state.address}
                onChange={this.updateAddress}
                ref = {(e)=>this._address = e} />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td><input
                type="text"
                value = {this.state.phone}
                onChange={this.updatePhone}
                ref = {(e)=> this._phone = e} />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td><input
                type="text"
                value = {this.state.email}
                onChange={this.updateEmail}
                placeholder = "Email"
                ref = {(e)=> this._email = e} />
              </td>
            </tr>
            <tr>
              <th><button className="ml-5" type="submit">Edit Client</button></th>
            </tr>
         </tbody>
      </table>
       </form>
     </div>
    )
  }
}


export default ClientProfileEdit
