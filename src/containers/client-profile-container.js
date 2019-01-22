import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { makeSale, clientProfile, filterClientProfileEdit, clientProfileEdit } from '../actions/client'
import { editUpcomingJob, deleteUpcomingJob } from '../actions/job'
import ClientProfile from '../components/client-profile'

function mapStateToProps(state){
  console.log("State Client:", state.client)
  return{
    cfid: state.client.clientProfile.cfid,
    name: state.client.clientProfile.name,
    rate: state.client.clientProfile.rate,
    address: state.client.clientProfile.address,
    phone: state.client.clientProfile.phone,
    email: state.client.clientProfile.email,
    clientProfileProps: state.client.clientProfileProps,
    editClient: state.client.editClient,
    clientProfileUpcomingJobs: state.client.clientProfileUpcomingJobs,
    deletedUpcomingJobID: state.job.deleteUpcomingJobID
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators({ clientProfile, filterClientProfileEdit, clientProfileEdit, makeSale, editUpcomingJob, deleteUpcomingJob }, dispatch)
  }
}

const client_profile = connect(mapStateToProps, mapDispatchToProps)(ClientProfile)

export default client_profile
