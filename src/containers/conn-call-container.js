import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchConnCalls } from '../actions/client'

import ConnCall from '../components/conn-call'

function mapStateToProps(state){
  return {
    connCalls: state.client.connCalls
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators({ fetchConnCalls }, dispatch)
  }
}

const conncall = connect(mapStateToProps, mapDispatchToProps)(ConnCall)

export default conncall
