
function countReducer(state, action) {

  if(state === undefined){
    state = {
      count: 0,
      countplus: 0
    }
  }

  switch(action.type){
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1
      }
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1
      }
    case "INCREASE_PLUS":
      return {
        ...state,
        countplus: state.countplus + 10
      }
    case "DECREASE_PLUS":
      return {
        ...state,
        countplus: state.countplus - 10
      }
    default:
      return state
  }

}

export default countReducer
