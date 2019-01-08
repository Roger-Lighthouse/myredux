import React, { Component } from 'react'

class JobFunctions extends Component {

  constructor(props){
    super(props)

    this.state = {
      run_spinner_find_clients: false,
      run_spinner_fall_jobs: false
    }

    this.backToClient = this.backToClient.bind(this)
    this.fireJobFunctions = this.fireJobFunctions.bind(this)
    this.addJob = this.addJob.bind(this)
    this.findClients = this.findClients.bind(this)
    this.getReceivables = this.getReceivables.bind(this)
    this.getFallJobs = this.getFallJobs.bind(this)
  }

  addJob(client){
    this.props.actions.addJob(client)
  }

  findClients(){
    this.props.actions.findClients()
  }

  fireJobFunctions(){

  }

  backToClient(){

  }

  getReceivables(){
    this.setState({
      run_spinner_find_clients: true,
      run_spinner_fall_jobs: false
    })
    this.props.actions.findClients();
  }

  getFallJobs(){
    this.setState({
      run_spinner_fall_jobs: true,
      run_spinner_find_clients: false
    })
    this.props.actions.getFallJobs();
  }


  render(){
    var findClients = null
    if(this.state.run_spinner_find_clients){
      findClients = <i className="fa fa-spinner fa-5x fa-spin"></i>
    }
    var balance = 0
    if(this.props.findClients.length>0){
      findClients = (<div>
      <h2 style={{color: "blue", backgroundColor: "red"}}>Receivable Clients {this.props.findClients.length}</h2>
      <div className="container">
      <div className="row">
      <table className='table table-striped'>
        <thead className='thead-inverse'>
          <tr>
            <th>CFID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Datebi</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.findClients.map((client, index)=>{
            balance+=Number(client.price)
            return (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.address}</td>
                <td>{client.phone}</td>
                <td>{client.datebi}</td>
                <td>${Number(client.price).toFixed(2)}</td>
              </tr>
            )
          })}
          <tr>
            <th colSpan={5}>Balance:</th>
            <th>${balance.toFixed(2)}</th>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
      <br/><br/>
      </div>)
    }


    var fallJobs = null
    if(this.state.run_spinner_fall_jobs){
      fallJobs = <i className="fa fa-spinner fa-5x fa-spin"></i>
    }
    if(this.props.fallJobs.length>0){
      fallJobs = (<div>
      <h2 style={{color: "blue", backgroundColor: "red"}}>Outstanding Fall Jobs {this.props.fallJobs.length}</h2>
      <div className="container">
      <div className="row">
      <table className='table table-striped'>
        <thead className='thead-inverse'>
          <tr>
            <th>Job ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Job Desc</th>
            <th>Start Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.fallJobs.map((client, index)=>{
            balance+=Number(client.price)
            return (
              <tr key={client.id}>
                <td>{index + 1}</td>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.address}</td>
                <td>{client.phone}</td>
                <td>{client.jobdesc}</td>
                <td>{client.sdate}</td>
                <td>${Number(client.price).toFixed(2)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      </div>
      <br/><br/>
      </div>)
    }



    var completedJobs = null
    if(this.props.completedJobs.length>0  ){
      completedJobs = (<div>
      <h2 style={{color: "blue", backgroundColor: "red"}}>Completed Jobs {this.props.main_client.name}</h2>
      <table border="1">
        <tbody>
          <tr>
            <th>JobID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Datebi</th>
          </tr>

          {this.props.completedJobs.map((job)=>{
            return (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.name}</td>
                <td>{job.address}</td>
                <td>{job.phone}</td>
                <td>{job.datebi}</td>
              </tr>
            )
          })}
        </tbody>
      </table><br/><br/>
      </div>)
    }


    return(
      <div>
        <button className="btn btn-link" onClick={this.getReceivables}>Receivables</button>
        <button className="btn btn-link" onClick={this.getFallJobs}>Fall Jobs</button>
        {fallJobs}
        {findClients}
        {completedJobs}
      </div>
    )
  }


}

export default JobFunctions
