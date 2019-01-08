import React, { Component} from 'react'
import '../index.css'
import PropertyList from '../dumb_components/property-list'
import ClientProfileEdit from '../components/client-profile-edit'

class ClientProfile extends Component {

  render(){
    var propList = ""
    if(this.props.clientProfileProps.length>0){
     propList = <PropertyList cp_props={this.props.clientProfileProps} />
    }
    var editClient = ""
    if(this.props.editClient){
      editClient =
      <ClientProfileEdit
        cfid={this.props.cfid}
        name={this.props.name}
        address={this.props.address}
        phone={this.props.phone}
        email={this.props.email}
        fireEdit={this.props.actions.clientProfileEdit}/>
    }
    return(
      <span className="client-profile">
        {this.props.name}&nbsp;&nbsp;&nbsp;Rating: {this.props.rate}<br/>
        Billing Address: {this.props.address}<br/>
        Phone: {this.props.phone}<br/>
        Email: {this.props.email}<br/>
        <button className="btn btn-link" onClick={()=>this.props.actions.filterClientProfileEdit(true)}>Edit Client</button>
        { editClient }
        { propList }
      </span>
    )
  }
}

export default ClientProfile
