
import '../index.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseAction, decreaseAction } from '../actions/count.js'
import Counter from '../components/Counter'



const mapStateToProps = (state) => {
  console.log("countValue:", state.count)
  return{
    countValue: state.count
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ increaseAction: increaseAction, decreaeAction: decreaseAction }, dispatch)
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
