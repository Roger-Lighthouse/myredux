import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { makeSale, clientProfile, clientProfileEdit, editUpcomingJob } from '../actions/client'
import { deleteUpcomingJob } from '../actions/job'
import ClientProfile from '../components/client-profile'

function mapStateToProps(state){

  return{
    clientProfileInfo: state.client.clientProfileInfo,
    clientProfileProps: state.client.clientProfileProps,
    editClient: state.client.editClient,
    clientProfileUpcomingJobs: state.client.clientProfileUpcomingJobs,
    deletedUpcomingJobID: state.job.deleteUpcomingJobID
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators({ clientProfile, clientProfileEdit, makeSale, editUpcomingJob, deleteUpcomingJob }, dispatch)
  }
}

const client_profile = connect(mapStateToProps, mapDispatchToProps)(ClientProfile)

export default client_profile
