import React, {Component} from 'react'

class PropertyList extends Component {


  render(){
    return (
       <div>
         <br/><br/><br/>
         <h4>Properties: {this.props.cp_props.length}</h4>
         <table className="table table-striped">
         <thead>
           <tr>
             <th>JOBINFOID</th>
             <th>Address</th>
             <th>W1</th>
             <th>EH</th>
             <th></th>
           </tr>
         </thead>
         <tbody>
         {this.props.cp_props.map((prop)=>(
         <tr key={prop.jobinfoid}>
           <td>{prop.jobinfoid}</td>
           <td>{prop.address}</td>
           <td>${Number(prop.w1).toFixed(2)}</td>
           <td>${Number(prop.eh).toFixed(2)}</td>
           <td><button className="btn btn-link">Make Sale</button></td>
         </tr>
         ))}
         </tbody>
         </table>
       </div>
    )
  }
}

export default PropertyList
