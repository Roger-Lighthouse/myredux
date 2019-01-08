import { smartSearch } from '../actions/client'
import { clientProfile } from '../actions/client'
import { clientProfileProps } from '../actions/client'

import SmartSearch from '../components/smart-search'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


function mapStateToProps(state){
  return {
    smartSearch: state.client.smartSearch,
    filterClientProfile: state.client.filterClientProfile
  }
}

function mapDispatchToProps(dispatch){
    return{
      actions: bindActionCreators({ smartSearch, clientProfile, clientProfileProps }, dispatch)
    }
}

const ss = connect(mapStateToProps, mapDispatchToProps)(SmartSearch)

export default ss
