import axios from 'axios';


function upcomingJob(client){
  return {type: "UPCOMING JOBS", payload: client}

}


function fetchCompletedJobs(){
  const request = axios.get("http://localhost:3000/api/jobs/completed.json");
  return {
    type: 'LOAD_COMPLETED_JOBS',
    payload: request
  }
}

function addJob(cfid){
  const post = {cfid: cfid, jobdesc: "W1", price: "100", sdate: "2019-01-15"}
  const request = axios.post(`http://localhost:3000/api/jobs?post=${post}.json`)
  return {
    type: 'ADD_JOB',
    payload: request
  }
}


function deleteUpcomingJob(jobid){
  const request = axios.get(`http://localhost:3000/api/jobs/${jobid}/delete_upcoming_job.json`)
  return {
    type: 'DELETE_JOB',
    payload: request
  }
}




export { upcomingJob, fetchCompletedJobs, addJob, deleteUpcomingJob }
