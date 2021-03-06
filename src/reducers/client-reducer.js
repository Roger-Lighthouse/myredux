const initialState = {
  clientList: [
    {cfid: '1', name: 'Bob Barker', address: '35 Main Street', phone: '416-777-8888'},
    {cfid: '2', name: 'Sam Smyth', address: '5 Lisgar Street', phone: '416-777-1111'},
    {cfid: '3', name: 'Gary Dillon', address: '15 Spadina Street', phone: '416-967-1111'}
  ],

  propertyList: [
    {propid: '1', job_address: '35 Main Street', w1: '100', eh: '90'},
    {propid: '2', job_address: '5 Lisgar Street', w1: '120', eh: '100'},
    {propid: '3', job_address: '15 Spadina Street', w1: '140', eh: '110'}
  ],

  findClients: [],
  smartSearch:[],
  clientProfileInfo: [],
  clientProfileProps: [],
  clientProfileUpcomingJobs: [],
  editClient: false,
  fallJobs: [],
}


function clientReducer(state = initialState, action){
  switch( action.type ){
    case "ADD_CLIENT":
      return({
        ...state,
        clientList: state.clientList.concat(action.payload)
      })
    case "EDIT_CLIENT":
      return({
        ...state,
        clientList: state.clientList.map((client)=>{
          if(client.cfid === action.payload.client.cfid){
            client.name = action.payload.client.name
            client.address = action.payload.client.address
            client.phone = action.payload.client.phone
          }
          return client
        })
      })
    case "REMOVE_CLIENT":
      return({
        ...state,
        clientList: state.clientList.filter((client)=> client.cfid !== action.payload.cfid)
      })
    case "FIND_CLIENTS_FULFILLED":
      return({
        ...state,
        findClients: action.payload.data,
        fallJobs: []
      })
    case "FALL_JOBS_FULFILLED":
      return({
        ...state,
        fallJobs: action.payload.data,
        findClients: []
      })
    case "SMART_SEARCH_FULFILLED":
      return({
        ...state,
        smartSearch: action.payload.data,
      })
    case 'CLIENT_PROFILE_FULFILLED':
      return({
        ...state,
        clientProfileInfo: action.payload.data.info,
        clientProfileProps: action.payload.data.props,
        clientProfileUpcomingJobs: action.payload.data.upcoming,
        smartSearch: [],
      })
    case 'FILTER_CLIENT_PROFILE_EDIT':
      return({
        ...state,
        editClient: true
      })
    case 'CLIENT_PROFILE_EDIT_FULFILLED':
      return({
        ...state,
        clientProfile: action.payload.data,
        smartSearch: [],
        editClient: false
        })
    case 'MAKE_SALE_FULFILLED':
      let upc = state.clientProfileUpcomingJobs
      upc = [...state.clientProfileUpcomingJobs, action.payload.data]
      return {
        ...state,
        clientProfileUpcomingJobs: upc
      }
    case 'FETCH_CONN_CALLS_FULFILLED':
      console.log("Nut", action.payload.data)
      return {
        ...state,
        connCalls: action.payload.data
      }
    default:
      return state
  }

}


export default clientReducer
