

function clientReducer(state = { clientList: [] }, action){

  // if(state === undefined){
  //   return {
  //     clientList: []
  //   }
  // }

  switch( action.type ){
    case "addClient":
      return({
        ...state,
        clientList: state.clientList.concat(action.payload)
      })
    case "removeClient":
      return({
        ...state,
        clientList: state.clientList.filter((client)=> client.id !== action.payload.id)
      })
    default:
      return({
        ...state
      })
  }

}


export default clientReducer
