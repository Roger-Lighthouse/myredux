import React, { Component } from 'react'
import Select from 'react-select';

const options = [
  { value: 'W1', label: 'W1' },
  { value: 'W2', label: 'W2' },
  { value: 'EH', label: 'EH' },
];


class EditUpcomingJob extends Component{

  constructor(props){
    console.log(props)
    super(props)
    const id = props.job? props.job.id : null
    const jobdesc = props.job? props.job.jobdesc : null
    const sdate = props.job? props.job.sdate : null
    this.state={
      id: id,
      jobdesc: jobdesc,
      sdate: sdate,
    }

    this.setJobType = this.setJobType.bind(this)
    this.saveEditUpcomingJob = this.saveEditUpcomingJob.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleJobChange = this.handleJobChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    const job = nextProps.job
    const id = job? job.id : null
    const jobdesc = job? job.jobdesc : null
    const sdate = job? job.sdate : null
    this.setState({
        id: id,
        jobdesc: jobdesc,
        sdate: sdate,
      });
  }


  handleDateChange(e){
    console.log("New Date", e.target.value)
    this.setState({
      sdate: e.target.value
    })
  }

  handleJobChange(e){
    console.log(e)
    this.setState({
      jobdesc: e.value
    })
  }

  saveEditUpcomingJob(e){
    //e.preventDefault()
    console.log("ok Here", this.props.editUpcomingJob)
    this.props.editUpcomingJob(this.state.id, this.state.jobdesc, this.state.sdate)
  }

  setJobType(){

  }

  render(){
    return(
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Edit Job</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <form onSubmit={this.saveEditUpcomingJob}>
                    JOBID:{this.state.id}
                    <div>
                    <Select
                      defaultValue={ this.state.jobdesc }
                      onChange={(e)=>this.handleJobChange(e)}
                      options={options}
                    />
                    </div>
                    <div onChange={ this.setJobType }>
                          <input onChange={()=>this.handleTypeChange('Fltr')} type="radio" value="Fltr" name="jobType" defaultChecked={this.selectedType==='Fltr'}/>Floater
                          &nbsp;&nbsp;&nbsp;&nbsp;<input onChange={()=>this.handleTypeChange('Appt')} type="radio" value="Appt" name="jobType" defaultChecked={this.selectedType==='Appt'}/>Appointment
                    </div>
                     <label>Date</label>
                     <div className="input-group">
                      <input
                        onChange={(e)=>this.handleDateChange(e)}
                        id="date"
                        name="date"
                        placeholder="MM/DD/YYYY"
                        type="date"
                        defaultValue = { this.state.sdate }
                        ref = {(e)=> this._sdate = e }
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
   )
  }
}

export default EditUpcomingJob




// <form onSubmit={this.editUpcomingJob}>
//   <div>
//     JOBID:{this.props.job.id}
//   </div>
//   <div>
//   <Select
//     value={ this.props.job.jobdesc }
//     onChange={this.handleJobChange}
//     options={options}
//   />
//   </div>
//   <div onChange={ this.setJobType }>
//         <input onChange={()=>this.handleTypeChange('Fltr')} type="radio" value="Fltr" name="jobType" defaultChecked={this.selectedType==='Fltr'}/>Floater
//         &nbsp;&nbsp;&nbsp;&nbsp;<input onChange={()=>this.handleTypeChange('Appt')} type="radio" value="Appt" name="jobType" defaultChecked={this.selectedType==='Appt'}/>Appointment
//   </div>
//    <label>Date</label>
//    <div className="input-group">
//     <input
//       onChange={()=>this.handleDateChange()}
//       id="date"
//       name="date"
//       placeholder="MM/DD/YYYY"
//       type="text"
//       ref = {(e)=> this._date = e }
//     />
//    </div>
//   <div>
//     <button className="bg-info" type="submit">Make Sale</button>
//   </div>
//   <div className="modal-footer">
//       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//       <button type="submit" className="btn btn-primary" data-dismiss="modal">Save changes</button>
//   </div>
// </form>
