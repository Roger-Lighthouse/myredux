import React, { Component} from 'react'
import '../index.css'
import PropertyList from '../components/property-list'
import UpcomingJobs from '../components/upcoming-jobs'
import ClientProfileEdit from '../components/client-profile-edit'

class ClientProfile extends Component {

  constructor(props){
    console.log("PeeRops: ",props)
    super(props)
      this.state = {
        cfid: props.match.params.id,
        name: null,
        address: null,
        phone: null,
        rate: null,
        email: null,
        cp_up: [],
        cp_props: []
      }
    this.editUpcomingJob = this.editUpcomingJob.bind(this)
    this.makeSale = this.makeSale.bind(this)
    this.deleteUpcomingJob = this.deleteUpcomingJob.bind(this)
  }

  componentDidMount(){
    if(this.state.cfid)this.props.actions.clientProfile(this.state.cfid)
  }

  componentWillReceiveProps(nextProps){
    console.log("Next Props: ", nextProps)
      this.setState({
        cfid: nextProps.clientProfileInfo.cfid,
        name: nextProps.clientProfileInfo.name,
        address: nextProps.clientProfileInfo.address,
        phone: nextProps.clientProfileInfo.phone,
        rate: nextProps.clientProfileInfo.rate,
        email: nextProps.clientProfileInfo.email,
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
      cp_up: up
    })
  }

  makeSale(job){
    this.props.actions.makeSale(job)
  }

  deleteUpcomingJob(id){
    this.props.actions.deleteUpcomingJob(id)
    let up = this.state.cp_up
    up = up.filter((job)=> job.id!==id)
    this.setState({
      cp_up: up
    })

  }

  render(){
    if(!this.state.cfid){
      return null
    }
    var upcomingJobs = null
    if(this.state.cp_up.length>0){
      upcomingJobs = <UpcomingJobs
       cfid={[this.state.cfid]}
       cp_up={this.state.cp_up}
       editUpcomingJob={this.editUpcomingJob}
       deleteUpcomingJob={this.deleteUpcomingJob}
      />
    }
    var propList = ""
    if(this.props.clientProfileProps.length>0){
     propList = <PropertyList cfid={this.state.cfid} cp_props={this.state.cp_props} makeSale={this.makeSale} />
    }
    return(
      <span className="client-profile">
      <div>
        {this.state.cfid}<br/>
        {this.state.name}&nbsp;[{this.state.rate}]<br/>
        {this.state.address}(billing)<br/>
        {this.state.phone}(phone)<br/>
        {this.state.email}<br/>
      </div>

      <button
        data-toggle="modal"
        data-target="#editClientModal"
        className="btn btn-primary"
        >
        Editsis Client
      </button>

              <ClientProfileEdit
                cfid={this.state.cfid}
                name={this.state.name}
                address={this.state.address}
                phone={this.state.phone}
                email={this.state.email}
                fireEdit={this.props.actions.clientProfileEdit} />


      <div>
      { propList }
      { upcomingJobs }
      </div>
    </span>
    )
  }
}

export default ClientProfile
