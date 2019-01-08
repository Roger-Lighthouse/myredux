import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import JobFunctions from '../components/job-functions'
import { upcomingJob, fetchCompletedJobs, addJob } from '../actions/job'
import { findClients, getFallJobs } from '../actions/client'


function mapStateToProps(state){
  return {
    upcomingJobs: state.job.upcomingJobs,
    main_client: state.job.main_client,
    completedJobs: state.job.completedJobs,
    jobAdded: state.job.jobAdded,
    findClients: state.client.findClients,
    fallJobs: state.client.fallJobs
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ upcomingJob, fetchCompletedJobs, addJob, findClients, getFallJobs }, dispatch)}
}

let JobContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(JobFunctions)

export default JobContainer
