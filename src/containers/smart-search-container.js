
import { smartSearch, clientProfile } from '../actions/client'

import SmartSearch from '../components/smart-search'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


function mapStateToProps(state){
  return {
    smartSearch: state.client.smartSearch,
  }
}

function mapDispatchToProps(dispatch){
    return{
      actions: bindActionCreators({ smartSearch, clientProfile }, dispatch)
    }
}

const ss = connect(mapStateToProps, mapDispatchToProps)(SmartSearch)

export default ss
