const initialList = {
  upcomingJobs: [
    {cfid: "1", jobid: "1", jobDesc: "W1", jobPrice: "100"},
    {cfid: "2", jobid: "2", jobDesc: "W1", jobPrice: "150"}
  ]

}

function jobReducer(state, action){
  if(state === undefined){
    state = {
      upcomingJobs: initialList.upcomingJobs,
      completedJobs: []
    }
  }

  switch(action.type){
    case "UPCOMING JOBS":
      const cfid = action.payload.cfid
      var uc = state.upcomingJobs.filter((job)=>{
        return job.cfid === cfid
      })
      return({
        ...state,
        upcomingJobs: uc,
        main_client: action.payload
      })


    case "LOAD_COMPLETED_JOBS_FULFILLED":
      return{
        ...state,
        completedJobs: action.payload.data
      };

    case 'ADD_JOB_FULFILLED':
      return{
          ...state,
          jobAdded: action.payload.data.added
      }

    default:
      return state;
    }

}

export default jobReducer
