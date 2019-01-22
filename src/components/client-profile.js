import React, { Component} from 'react'
import '../index.css'
import PropertyList from '../components/property-list'
import UpcomingJobs from '../components/upcoming-jobs'
import ClientProfileEdit from '../components/client-profile-edit'

class ClientProfile extends Component {

  constructor(props){
    super(props)
    this.state = {
      cfid: null,
      address: null,
      phone: null,
      rate: null,
      email: null,
      cp_up: [],
      cp_props: []
    }
    this.editUpcomingJob = this.editUpcomingJob.bind(this)

  }

  componentWillReceiveProps(nextProps){
    console.log("OK HERE", nextProps)
    this.setState({
      cfid: nextProps.cfid,
      address: nextProps.address,
      phone: nextProps.phone,
      email: nextProps.email,
      rating: nextProps.rate,
      cp_up: nextProps.clientProfileUpcomingJobs,
      cp_props: nextProps.clientProfileProps
    })
  }

  editUpcomingJob(id, jobdesc, sdate){
    this.props.actions.editUpcomingJob(id, jobdesc, sdate)

    let up = this.state.cp_up
    up = up.map((curr_job)=>{
      if(curr_job.id===id){
        curr_job.jobdesc = jobdesc
        curr_job.sdate = sdate
      }
      return curr_job
    })
    this.setState({
      upcomingJobs: up
    })
  }


  render(){
    if(!this.state.cfid){
      return null
    }
    var upcomingJobs = null

    console.log("cfid", this.state.cfid)
    console.log("cp_up", this.state.cp_up)
    console.log("Edit Up Job", this.editUpcomingJob)
    console.log("delete", this.props.actions.deleteUpcomingJob)
    if(this.state.cp_up.length>0){

      upcomingJobs = <UpcomingJobs
       cfid={[this.state.cfid]}
       cp_up={this.state.cp_up}
       editUpcomingJob={this.editUpcomingJob}
       deleteUpcomingJob={this.props.actions.deleteUpcomingJob}
      />
    }
    var propList = ""
    if(this.props.clientProfileProps.length>0){
     propList = <PropertyList cfid={this.state.cfid} cp_props={this.state.cp_props} makeSale={this.props.actions.makeSale} />
    }
    var editClient = ""
      editClient =
      <ClientProfileEdit
        cfid={this.props.cfid}
        name={this.props.name}
        address={this.props.address}
        phone={this.props.phone}
        email={this.props.email}
        fireEdit={this.props.actions.clientProfileEdit}/>
    return(
      <span className="client-profile">
      <div>
      {this.props.cfid}<br/>
      {this.props.name}&nbsp;[{this.props.rate}]<br/>
        {this.props.address}(billing)<br/>
        {this.props.phone}(phone)<br/>
        {this.props.email}<br/>
      </div>
      <button type="button" className="btn btn-link" data-toggle="modal" data-target="#myModal">Edit Client</button>
      <div className="container" id="edit-client">
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Edit Client</h4>
              </div>
              <div className="modal-body">
                {editClient}
              </div>
              <div className="modal-footer">
                <button type="button" onClick={this.testModal} className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      { propList }
      { upcomingJobs }
      </div>
    </span>
    )
  }
}

export default ClientProfile
