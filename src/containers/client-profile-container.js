import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { clientProfile, filterClientProfileEdit, clientProfileEdit } from '../actions/client'
import ClientProfile from '../components/client-profile'

function mapStateToProps(state){
  return{
    cfid: state.client.clientProfile.cfid,
    name: state.client.clientProfile.name,
    rate: state.client.clientProfile.rate,
    address: state.client.clientProfile.address,
    phone: state.client.clientProfile.phone,
    email: state.client.clientProfile.email,
    clientProfileProps: state.client.clientProfileProps,
    editClient: state.client.editClient
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators({ clientProfile, filterClientProfileEdit, clientProfileEdit }, dispatch)
  }
}

const client_profile = connect(mapStateToProps, mapDispatchToProps)(ClientProfile)

export default client_profile
