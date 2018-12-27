import { addClient, removeClient} from '../actions/client'
import { bindActionCreators } from 'redux'
import connect from 'react-redux'
import Client from '../components/Client'



function mapStateToProps(state, action){
  return {clientList: state.clientList}
}

function mapDispatchToProps(dispatch){
  return { actions: bindActionCreators({ addClient, removeClient}, dispatch) }
}

let ClientContainer = connect(mapStateToProps, mapDispatchToProps)(Client)

export default ClientContainer
