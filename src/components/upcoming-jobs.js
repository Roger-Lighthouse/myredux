import React, { Component } from 'react'
import EditUpcomingJob from './edit-upcoming-job'

class UpcomingJobs extends Component{


  constructor(props){
    super(props)
    this.state = {
      editModal: null
    }
    this.editUpcomingJob = this.editUpcomingJob.bind(this)
    this.deleteUpcomingJob = this.deleteUpcomingJob.bind(this)
  }

  editUpcomingJob(job){
    var editModal = <EditUpcomingJob job={job} editUpcomingJob={this.props.editUpcomingJob}/>
    this.setState({
      editModal: editModal
    })
  }

  deleteUpcomingJob(jobid){
    this.props.deleteUpcomingJob(jobid)
    this.props.clientProfile(this.props.cfid)
  }

  render(){
    var upcomingJobs = this.props.cp_up.map((job)=>{
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
                   data-target="#editUpcomingJobModal"
                   className="btn btn-primary"
                   onClick={()=>this.editUpcomingJob(job)}
                 >
                  Edit Job
                 </button>
               </td>
             </tr>
    })
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

        <div className="container" id="edit_upcoming_job">
          <div className="modal fade" id="editUpcomingJobModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Edit Upcoming Job</h4>
                </div>
                <div className="modal-body">
                 { this.state.editModal }
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )

  }
}

export default UpcomingJobs



// <button type="button" onClick={this.makeSale} className="btn btn-default" data-dismiss="modal">Close</button>
