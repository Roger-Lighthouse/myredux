import React, { Component } from 'react'
import Select from 'react-select';

const options = [
  { value: 'W1', label: 'W1' },
  { value: 'W2', label: 'W2' },
  { value: 'EH', label: 'EH' },
];


class EditUpcomingJob extends Component{

  constructor(props){
    super(props)

    this.editUpcomingJob = this.editUpcomingJob.bind(this)
  }

  editUpcomingJob(){

  }

  render(){
    return(
      <div>
        <form onSubmit={this.makeSale}>
          <div className="form-group">
            {this.props.job.jobinfoid}
          </div>
          <div className="form-group">
            {this.state.address}
          </div>
          <div className="form-group">
          <Select
            value={ this.state.selectedOption }
            onChange={this.handleJobChange}
            options={options}
          />
          </div>
          <div className="form-group" onChange={this.setJobType.bind(this)}>
                <input onChange={()=>this.handleTypeChange('Fltr')} type="radio" value="Fltr" name="jobType" defaultChecked={this.selectedType==='Fltr'}/>Floater
                &nbsp;&nbsp;&nbsp;&nbsp;<input onChange={()=>this.handleTypeChange('Appt')} type="radio" value="Appt" name="jobType" defaultChecked={this.selectedType==='Appt'}/>Appointment
          </div>
          <div className="form-group ">
           <label className="control-label " htmlFor="date">
            Date
           </label>
           <div className="input-group">
            <div className="input-group-addon">
             <i className="fa fa-calendar">
             </i>
            </div>
            <input
              onChange={()=>this.handleDateChange()}
              className="form-control"
              id="date"
              name="date"
              placeholder="MM/DD/YYYY"
              type="text"
              ref = {(e)=> this._date = e }
            />
           </div>
          </div>
          <div className="form-group">
            <button className="form-control bg-info" type="submit">Make Sale</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditUpcomingJob
