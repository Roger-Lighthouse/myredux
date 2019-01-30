import React, {Component} from 'react'
import ClientMakeSale from './client-make-sale'
//import SaleModal from './sale-modal'

class PropertyList extends Component {
  constructor(props){
    super(props)
    this.state = {
      jobinfoid: "",
      address: ""
    }

    this.makeSale = this.makeSale.bind(this)
  }



  makeSale(jobinfoid, address){
    var clientMakeSale = <ClientMakeSale showModal={true} clientProfile={this.props.clientProfile} cfid={this.props.cfid} jobinfoid={jobinfoid} address={address} makeSale={this.props.makeSale}/>
    this.setState({
      clientMakeSale: clientMakeSale
    })
  }

  render(){
    if(this.props.saleSuccess){
    return (
       <div>
         <br/><br/><br/>
         <h4>Properties {this.props.cp_props.length}</h4>
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
           <td><button
              type="button"
              className="btn btn-primary mt=0 mp=0"
              data-toggle="modal"
              data-target="#saleModal"
              onClick = {()=>this.makeSale(prop.jobinfoid, prop.address)}
              >Make Sale</button></td>
           </tr>
         ))}
         </tbody>
         </table>
         { this.state.clientMakeSale }

      </div>
    )
  }else{
    return(
      <div>
        <br/><br/><br/>
        <h4>Properties {this.props.cp_props.length}</h4>
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
            <td><button
               type="button"
               className="btn btn-primary mt=0 mp=0"
               data-toggle="modal"
               data-target="#saleModal"
               onClick = {()=>this.makeSale(prop.jobinfoid, prop.address)}
               >Make Sale</button></td>
            </tr>
          ))}
          </tbody>
        </table>

        <div className="container" id="make_sale">
          <div className="modal fade" id="saleModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Make Sale</h4>
                </div>
                  <div className="modal-body">
                   { this.state.clientMakeSale }
                 </div>
                 <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
         </div>


      </div>
    )
  }
  }
}

export default PropertyList
