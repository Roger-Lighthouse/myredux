import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Stats from '../components/stats'
import { showStats, showClock } from '../actions/stats'

function mapStateToProps(state){
  return {
    prod: state.stat.prod,
    sales: state.stat.sales,
    smoke: state.stat.smoke,
    hours: state.stat.hours,
    minutes: state.stat.minutes,
    seconds: state.stat.seconds
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ showStats, showClock }, dispatch)}
}

const StatsCompany = connect(mapStateToProps, mapDispatchToProps)(Stats)

export default StatsCompany
