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

  componentWillReceiveProps(nextProps){
    this.setState({
      name: nextProps.name,
      address: nextProps.address,
      phone: nextProps.phone,
      email: nextProps.email
    })

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
    //e.preventDefault()
    this.props.fireEdit(this.props.cfid, this.state.name, this.state.address, this.state.phone, this.state.email)
    this._name.value=""
    this._address.value=""
    this._phone.value=""
    this._email.value=""
  }


  render(){
    return(


      <div className="modal fade" id="editClientModal" tabIndex="-1" role="dialog" aria-labelledby="editClientModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="editClientModalLabel">Edit Client</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>

        <form onSubmit={this.editClient}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td><input
              onChange={(e)=>this.updateName(e)}
              type="text"
               placeholder = "Name"
               defaultValue = {this.state.name}
               ref = {(e)=>this._name = e} />
              </td>
            </tr>
            <tr>
              <th>Billing Address</th>
              <td><input
                onChange={(e)=>this.updateAddress(e)}
                type="text"
                defaultValue = {this.state.address}
                ref = {(e)=>this._address = e} />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td><input
                onChange={(e)=>this.updatePhone(e)}
                type="text"
                size="30"
                defaultValue = {this.state.phone}
                ref = {(e)=> this._phone = e} />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td><input
                onChange={(e)=>this.updateEmail(e)}
                type="text"
                size="30"
                defaultValue = {this.state.email}
                placeholder = "Email"
                ref = {(e)=> this._email = e} />
              </td>
            </tr>
            <tr>
            <th></th>
            {// <th><button className="ml-5" type="submit">Edit Client</button></th>
          }

            </tr>

         </tbody>
      </table>
       </form>
       <div className="modal-footer">
           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
           <button type="submit" className="btn btn-primary" data-dismiss="modal">Edit Job</button>
       </div>
   </div>
   </div>
</div>
)
  }
}


export default ClientProfileEdit
