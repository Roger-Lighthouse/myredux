
function countReducer(state={ count: 0, countplus: 0}, action) {

  console.log("State", state)
  // if(state === undefined){
  //   console.log("I'm IN State")
  //   return
  // }

  console.log("State After", state)

  switch(action.type){
    case "increase":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrease":
      return {
        ...state,
        count: state.count - 1
      }
    case "increasePlus":
      return {
        ...state,
        countplus: state.countplus + 10
      }
    case "decreasePlus":
      return {
        ...state,
        countplus: state.countplus - 10
      }
    default:
      return({
        ...state
      })
  }

}

export default countReducer
