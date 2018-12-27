

function addClient(client){
  return {type: "addClient", payload: client}
}

function removeClient(client){
  return {type: "removeClient", payload: client}
}

export { addClient, removeClient }
