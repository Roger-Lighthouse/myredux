import { addClient, editClient, removeClient } from '../actions/client'
import { upcomingJob } from '../actions/job'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ClientFunctions from '../components/client-functions'



const mapStateToProps = (state)=>{
  return {clientList: state.client.clientList}
}

const mapDispatchToProps = (dispatch)=>{
  return { actions: bindActionCreators({ addClient, editClient, removeClient, upcomingJob }, dispatch) }
}

let App1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientFunctions)

export default App1

// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)
//
// export default App
