

function StatReducer(state = {prod: 0, sales: 0, smoke: 0, hours: 0, minutes: 0, seconds: 0}, action){
  switch(action.type){
    case "STATS COMPANY":
      return {
        ...state,
        prod: state.prod + 100,
        sales: state.sales + 5,
        smoke: state.smoke + 1
      }
    case "SHOW CLOCK":
      var today = new Date()
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();

      return {
        ...state,
        hours: h,
        minutes: m,
        seconds: s
      }
    default:
      return state
  }
}

export default StatReducer
