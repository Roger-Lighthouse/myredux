import axios from 'axios'

function addClient(client){
  return {type: "ADD_CLIENT", payload: client}
}

function editClient(client){
  return {type: "EDIT_CLIENT", payload: client}
}

function removeClient(id){
  return {type: "REMOVE_CLIENT", payload: id}
}

function smartSearch(param){
  //var name = 'Felix'
//  const request = axios.get(`http://localhost:3000/api/clients/smart_search.json?name=${param.data}`)
  const request = axios.post(`http://localhost:3000/api/clients/smart_search.json?`, param)
  return {type: "SMART_SEARCH", payload: request}

}

function findClients(){
  const request = axios.get(`http://localhost:3000/api/clients/find_clients.json`)
  return {
    type: 'FIND_CLIENTS',
    payload: request
  }
}

function getFallJobs(){
  const request = axios.get(`http://localhost:3000/api/clients/fall_jobs.json`)
  return {
    type: 'FALL_JOBS',
    payload: request
  }
}

function clientProfile(cfid){
  const request = axios.get(`http://localhost:3000/api/clients/${cfid}/client_profile.json`)
  return {
    type: 'CLIENT_PROFILE',
    payload: request
  }
}

function clientProfileProps(cfid) {
  const request = axios.get(`http://localhost:3000/api/clients/${cfid}/client_profile_props.json`)
  return {
    type: 'CLIENT_PROFILE_PROPS',
    payload: request
  }
}

function filterClientProfileEdit(value) {
  console.log("Got Here")
  return {
    type: 'FILTER_CLIENT_PROFILE_EDIT',
    value: value
  }
}


function clientProfileEdit(cfid, name, address, phone, email) {
  var editObject = {
    cfid: cfid,
    name: name,
    address: address,
    phone: phone,
    email: email
  }
  const request = axios.post(`http://localhost:3000/api/clients/client_profile_edit.json`, editObject)
  return {
    type: 'CLIENT_PROFILE_EDIT',
    payload: request
  }
}


export { addClient, editClient, removeClient, smartSearch, findClients, clientProfile, clientProfileProps,
        filterClientProfileEdit, clientProfileEdit, getFallJobs}
