import React, { Component} from 'react'
import '../index.css'
import PropertyList from '../components/property-list'
import UpcomingJobs from '../components/upcoming-jobs'
import ClientProfileEdit from '../components/client-profile-edit'

class ClientProfile extends Component {

  constructor(props){
    super(props)

    this.fireRefreshClientProfile = this.fireRefreshClientProfile.bind(this)
  }

  fireRefreshClientProfile(cfid){
    console.log("Refresh Client Profile***")
    this.props.actions.refreshClientProfile(cfid)

  }
  render(){
    console.log("CP Props>>>>>>>", this.props)
    if(this.props.saleSuccess){
      console.log("Refresh Client Profile***")
      this.fireRefreshClientProfile(this.props.cfid)
    }
    var upcomingJobs = ""
  //  if(this.props.clientProfileUpcomingJobs.length>0){
      upcomingJobs = <UpcomingJobs cfid={this.props.cfid} cp_up={this.props.clientProfileUpcomingJobs} editUpcomingJob={this.props.editUpcomingJob} deleteUpcomingJobID={this.props.deleteUpcomingJobID} deleteUpcomingJob={this.props.actions.deleteUpcomingJob} clientProfile={this.props.actions.clientProfile} />
  //  }
    var propList = ""
    if(this.props.clientProfileProps.length>0){
     propList = <PropertyList cfid={this.props.cfid} cp_props={this.props.clientProfileProps} saleSuccess={this.props.saleSuccess} makeSale={this.props.actions.makeSale} clientProfile={this.props.actions.clientProfile} />
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
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="Nuts" className="embed-responsive-item" src="https://www.youtube.com/embed?v=AWyxKrOTGJI&list=RDAWyxKrOTGJI&index=0" allowFullScreen></iframe>
      </div>
      <div>
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
      { propList }
      { upcomingJobs }
    </span>
    )
  }
}

export default ClientProfile
