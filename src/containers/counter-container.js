
import '../index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseAction, decreaseAction } from '../actions/count'
import Counter from '../components/counter'

const mapStateToProps = (state) => {
  return{
    countValue: state.count.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ increaseAction: increaseAction, decreaseAction: decreaseAction }, dispatch)
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
