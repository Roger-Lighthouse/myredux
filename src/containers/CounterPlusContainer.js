import '../index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increasePlusAction, decreasePlusAction } from '../actions/count.js'
import CounterPlus from '../components/CounterPlus'


function mapStateToProps(state){
  return {
    countPlusValue: state.countplus
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ increasePlusAction, decreasePlusAction}, dispatch)}
}

let cuntplus = connect(mapStateToProps, mapDispatchToProps)(CounterPlus)

export default cuntplus
