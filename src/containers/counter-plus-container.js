import '../index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increasePlusAction, decreasePlusAction } from '../actions/count'
import CounterPlus from '../components/counter-plus'

function mapStateToProps(state){
  return {
    countPlusValue: state.count.countplus
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ increasePlusAction, decreasePlusAction}, dispatch)}
}

let countplus = connect(mapStateToProps, mapDispatchToProps)(CounterPlus)

export default countplus
