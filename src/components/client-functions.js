
import React, { Component} from 'react'
import ClientListTitle from '../dumb_components/client-list-title'
import ClientAddClient from './client-add-client'
import ClientEditClient from './client-edit-client'
import Job from '../containers/job-container'
//import Stat from '../containers/stats-container'

class ClientFunctions extends Component {
  constructor(props){
    super(props)
    this.state = {
      fire_edit_client: false,
      edit_client: null,
      job_functions: false,
      fire_upcoming_jobs: false,
      client_id: null
    }

    this.addClient = this.addClient.bind(this)
    this.deleteClient = this.deleteClient.bind(this)
    this.editClient = this.editClient.bind(this)
    this.fireEditClient = this.fireEditClient.bind(this)
    this.fireJobFunctions = this.fireJobFunctions.bind(this)
  }

  fireJobFunctions(client){
    this.props.actions.upcomingJob(client)
    this.setState({
      fire_upcoming_jobs: true,
    })
  }

  fireEditClient(client){
    this.setState({
      fire_edit_client: true,
      edit_client: client
    })
  }

  addClient(name, address, phone){
    var last_client = this.props.clientList[this.props.clientList.length - 1];
    var new_id = parseInt(last_client.id) + 1
    this.props.actions.addClient({id: new_id, name: name, address: address, phone: phone})
  }

  editClient(id, name, address, phone){
    this.props.actions.editClient({client: {id: id, name: name, address: address, phone: phone}})
    this.setState({
      fire_edit_client: false,
      edit_client: null
    })
  }

  deleteClient(id){
    this.props.actions.removeClient({id: id})
  }

  render() {
    var clientList = this.props.clientList.map((client, index)=>(
      <tr key={client.name}>
        <td>{client.id}</td>
        <td>{client.name}</td>
        <td>{client.address}</td>
        <td>{client.phone}</td>
        <td><button onClick={()=>this.deleteClient(client.id)}>Delete</button></td>
        <td><button onClick={()=>this.fireEditClient(client)}>Edit</button></td>
        <td><button onClick={()=>this.fireJobFunctions(client)}>Job Functions</button></td>
      </tr>
    ))

    var edit = null
    if(this.state.edit_client){
      edit = <ClientEditClient client={this.state.edit_client} editClient={this.editClient} />
    }

    if(this.state.fire_upcoming_jobs){
      return(
        <div>
          <Job main_client={this.state.main_client} />
        </div>
      )
    }else{
      return(
        <div>
         <table border="1">
          <ClientListTitle />
          <tbody>
            {clientList}
          </tbody>
         </table><br/><br/>

        {edit}

         <b>Add Client</b>
         <ClientAddClient addClient={this.addClient} />
        </div>
      )
    }
  }

}

export default ClientFunctions
