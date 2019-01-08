

function showStats(stats){
  return {type: "STATS COMPANY", payload: stats}
}

function showClock(){
  return {type: "SHOW CLOCK"}
}


export { showStats, showClock }
