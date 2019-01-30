import React, { Component } from 'react'

const options = [
  { value: 'W1', label: 'W1' },
  { value: 'W2', label: 'W2' },
  { value: 'EH', label: 'EH' },
  { value: 'W1 + EH', label: 'W1 + EH' },
  { value: 'W2 + EH', label: 'W2 + EH' },
  { value: 'W1 + EH + EG', label: 'W1 + EH + EG' },
];


class EditUpcomingJob extends Component{
  constructor(props){
    super(props)
    console.log("pee", props)
    this.state={
      job: {
        id: null,
        jobdesc: null,
        sdate: null,
        jobtype: null
      }
    }
    this.setJobType = this.setJobType.bind(this)
    this.saveEditUpcomingJob = this.saveEditUpcomingJob.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
  }

  componentDidMount(nextProps) {
    this.setState({
        jobdesc: this.props.job.jobdesc,
      });
  }


  addDate(date1, days){
    if(date1==null) return null
    let year = date1.slice(0,4)
    let month = date1.slice(5,7)
    month = parseInt(month)
    let day = date1.slice(8,10)
    day = parseInt(day)
    let ans = new Date(year, month, day);
    ans.setDate(ans.getDate() + days)
    var dd = ans.getDate()
    if(dd<10){
      dd=dd.toString()
      dd="0"+dd
    }
    var mm = ans.getMonth()
    if(mm<10){
      mm=mm.toString()
      mm="0"+mm
    }
    var yyyy = ans.getFullYear()
    ans = yyyy+'-'+mm+'-'+dd
    return ans
  }

  setJobType(jobType){
    let fdate = this.addDate(this.state.sdate, 10)
    if(jobType==="Appt"){
      fdate=this.state.sdate
    }

    this.setState({
      jobType: jobType,
      fdate: fdate
    })
  }

  componentWillReceiveProps(nextProps) {
    const job = nextProps.job
    let fdate = this.addDate(job.sdate, 10)
    this.setState({
        id: job.id,
        jobdesc: job.jobdesc,
        sdate: job.sdate,
        fdate: fdate,
      });
  }


  handleDataChange(e, name){
    if(name==="jobdesc"){
      this.setState({jobdesc: e.value})
    }else if(name==="sdate"){
      let sdate = e.target.value
      let fdate = this.addDate(sdate, 10)
      this.setState(
        {sdate: e.target.value,
          fdate: fdate
        })
    }else if(name==="fdate"){
      this.setState({fdate: e.target.value})
    }

  }

  saveEditUpcomingJob(e){
    this.props.editUpcomingJob(this.state.id, this.state.jobdesc, this.state.sdate)
  }


  render(){
    return(
      <div className="modal fade" id="upcomingJobModal" tabIndex="-1" role="dialog" aria-labelledby="upcomingModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content" style={{width: "600px"}}>
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Edit Job {this.state.id}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body" style={{backgroundColor: "blue", color: "yellow"}}>
                  <form onSubmit={this.saveEditUpcomingJob}>
                    <div>
                      <select value={this.state.jobdesc}
                              onChange={(e) => this.setState({jobdesc: e.target.value, validationError: e.target.value === "" ? "You must select your favourite team" : ""})}>
                        {options.map((team) => <option key={team.value} value={team.value}>{team.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <input onChange={()=>this.setJobType('Fltr')} type="radio" value="Fltr" name="jobType" defaultChecked={this.jobType==='Fltr'}/>Floater
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      <input onChange={()=>this.setJobType('Appt')} type="radio" value="Appt" name="jobType" defaultChecked={this.jobType==='Appt'}/>Appointment

                      <input onChange={()=>this.setJobType('Appt')} type="checkbox" value="Appt" name="jobType" defaultChecked={this.jobType==='Appt'}/>Appointment
                    </div>
                    <div>
                    <label>Start Date</label>
                      <input
                        id="sdate"
                        name="sdate"
                        placeholder="MM/DD/YYYY"
                        type="date"
                        defaultValue = { this.state.sdate }
                        onChange={(e)=>this.handleDataChange(e,"sdate")}
                        ref = {(e)=> this._sdate = e }
                      />
                     </div>
                     <div>
                       <label>Finish Date</label>
                        <input
                          id="fdate"
                          name="fdate"
                          placeholder="MM/DD/YYYY"
                          type="date"
                          defaultValue = { this.state.fdate }
                          onChange={(e)=>this.handleDataChange(e,"fdate")}
                          ref = {(e)=> this._fdate = e }
                        />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" onClick={()=>this.saveEditUpcomingJob()} data-dismiss="modal">Edit Job</button>
                    </div>
                  </form>
                  </div>
              </div>
          </div>
      </div>
   )
  }
}

export default EditUpcomingJob
