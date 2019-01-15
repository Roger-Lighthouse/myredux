import React, { Component } from 'react'
import Select from 'react-select';
//import { Button, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'


const options = [
  { value: 'W1', label: 'W1' },
  { value: 'W2', label: 'W2' },
  { value: 'EH', label: 'EH' },
];


class ClientMakeSale extends Component {

  constructor(props){
    super(props)
    this.state={
      jobinfoid: props.jobinfoid,
      address: props.address,
      jobtype: null,
      selectedJob: null,
      selectedType: null,
      sdate: null,
      show: false,
      message: ''
    }

    this.makeSale = this.makeSale.bind(this)
    this.handleJobChange = this.handleJobChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setJobType = this.setJobType.bind(this)

  }

  setJobType(){

  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  makeSale(e){
    e.preventDefault()
    this.props.makeSale({
      jobinfoid: this.state.jobinfoid,
      address: this.state.address,
      job: this.state.selectedJob,
      type: this.state.selectedType,
      sdate: this.state.sdate
    })
    console.log("OK But Still Got Here FU")
  }

  handleJobChange(e){
   console.log("E-JOb", e)
   this.setState(
     { selectedJob: e.value }
   );
 }

 handleTypeChange(value){
  this.setState(
    { selectedType: value }
  );
 }

 handleDateChange(){
   console.log(this._date.value)
   this.setState(
     { sdate: this._date.value }
   );
 }

 render() {

   return(
     <div>
       <form onSubmit={this.makeSale}>
         <div className="form-group">
           {this.state.jobinfoid}
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
           <i className="fa fa-calendar"></i>
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
         <button className="form-control bg-info" data-dismiss="modal" type="submit">Make Sale</button>
       </div>
    </form>
  </div>)
    }

}

export default ClientMakeSale



// render(){
//     if(this.state.saleMade){
//       return null
//     }else{
//     return(
//       <div>
//         <form onSubmit={this.makeSale}>
//           <div className="form-group">
//             {this.state.jobinfoid}
//           </div>
//           <div className="form-group">
//             {this.state.address}
//           </div>
//           <div className="form-group">
//           <Select
//             value={ this.state.selectedOption }
//             onChange={this.handleJobChange}
//             options={options}
//           />
//           </div>
//           <div className="form-group" onChange={this.setJobType.bind(this)}>
//                 <input onChange={()=>this.handleTypeChange('Fltr')} type="radio" value="Fltr" name="jobType" defaultChecked={this.selectedType==='Fltr'}/>Floater
//                 &nbsp;&nbsp;&nbsp;&nbsp;<input onChange={()=>this.handleTypeChange('Appt')} type="radio" value="Appt" name="jobType" defaultChecked={this.selectedType==='Appt'}/>Appointment
//           </div>
//           <div className="form-group ">
//            <label className="control-label " htmlFor="date">
//             Date
//            </label>
//            <div className="input-group">
//             <div className="input-group-addon">
//              <i className="fa fa-calendar">
//              </i>
//             </div>
//             <input
//               onChange={()=>this.handleDateChange()}
//               className="form-control"
//               id="date"
//               name="date"
//               placeholder="MM/DD/YYYY"
//               type="text"
//               ref = {(e)=> this._date = e }
//             />
//            </div>
//           </div>
//           <div className="form-group">
//             <button className="form-control bg-info" type="submit">Make Sale</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }


// <Modal show={this.state.showModal} onHide={this.close}>
//   <Modal.Header closeButton>
//     <Modal.Title>
//       {"Book Job"}
//     </Modal.Title>
//   </Modal.Header>
//   <Modal.Body closeModal={this.close}>
//        <form onSubmit={this.makeSale}  >
//               <div className="form-group">
//                 {this.state.jobinfoid}
//               </div>
//               <div className="form-group">
//                 {this.state.address}
//               </div>
//               <div className="form-group">
//               <Select
//                 value={ this.state.selectedOption }
//                 onChange={this.handleJobChange}
//                 options={options}
//               />
//               </div>
//               <div className="form-group" onChange={this.setJobType.bind(this)}>
//                     <input onChange={()=>this.handleTypeChange('Fltr')} type="radio" value="Fltr" name="jobType" defaultChecked={this.selectedType==='Fltr'}/>Floater
//                     &nbsp;&nbsp;&nbsp;&nbsp;<input onChange={()=>this.handleTypeChange('Appt')} type="radio" value="Appt" name="jobType" defaultChecked={this.selectedType==='Appt'}/>Appointment
//               </div>
//               <div className="form-group ">
//                <label className="control-label " htmlFor="date">
//                 Date
//                </label>
//                <div className="input-group">
//                 <div className="input-group-addon">
//                  <i className="fa fa-calendar">
//                  </i>
//                 </div>
//                 <input
//                   onChange={()=>this.handleDateChange()}
//                   className="form-control"
//                   id="date"
//                   name="date"
//                   placeholder="MM/DD/YYYY"
//                   type="text"
//                   ref = {(e)=> this._date = e }
//                 />
//                </div>
//               </div>
//               <div className="form-group">
//                 <button className="form-control bg-info" type="submit">Make Sale</button>
//               </div>
//             </form>
//
//
//
//
//
//   </Modal.Body>
//   <Modal.Footer>
//     <Button onClick={this.close}>Close</Button>
//   </Modal.Footer>
// </Modal>
