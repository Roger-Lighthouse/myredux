import React, { Component } from 'react'
import EditUpcomingJob from './edit-upcoming-job'

class UpcomingJobs extends Component{

  constructor(props){
    console.log("UUUU", props)
    super(props)
    this.state = {
      job: "null",
      upcomingJobs: props.cp_up
    }
    this.fireEditUpcomingJob = this.fireEditUpcomingJob.bind(this)
    this.editUpcomingJob = this.editUpcomingJob.bind(this)
    this.deleteUpcomingJob = this.deleteUpcomingJob.bind(this)
  }

  fireEditUpcomingJob(job){
    this.setState({
      job: job
    })
  }

  editUpcomingJob(id, jobdesc, sdate){
    this.props.editUpcomingJob(id, jobdesc, sdate)

  }


  deleteUpcomingJob(jobid){
    this.props.deleteUpcomingJob(jobid)
    this.props.clientProfile(this.props.cfid)
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      upcomingJobs: nextProps.cp_up
    })
  }


  render(){
      console.log("FUCKKK", this.state.upcomingJobs.length)
      if(this.state.upcomingJobs.length==0){
        return []
      }

      var upcomingJobs = this.state.upcomingJobs.map((job)=>{
      return <tr key={job.id}>
              <td>
                  <button
                    className="btn btn-danger"
                    onClick={()=>this.deleteUpcomingJob(job.id)}
                  >
                   Delete
                  </button>
               </td>
               <td>{ job.id }</td>
               <td>{ job.jobdesc }</td>
               <td>{ job.sdate }</td>
               <td>
                 <button
                   data-toggle="modal"
                   data-target="#exampleModal"
                   className="btn btn-primary"
                   onClick={()=>this.fireEditUpcomingJob(job)}
                 >
                  Edit Job
                 </button>
               </td>
             </tr>
    })

    console.log("Job State:", this.state)
    return(
      <div>
        <br/><h3>Upcoming Jobs {this.props.cp_up.length}</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>JobID</th>
              <th>Job Desc</th>
              <th>Start Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { upcomingJobs }
          </tbody>
        </table>

      <EditUpcomingJob job={this.state.job} editUpcomingJob={this.props.editUpcomingJob}/>
      </div>

    )

  }
}

export default UpcomingJobs
