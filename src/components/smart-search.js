import React, { Component } from 'react'
import ClientProfile from '../containers/client-profile-container'

class SmartSearch extends Component {

  constructor(props){
    super(props)
    this.state = {
      text: "",
      loading: ""
    }



    this.searchClient = this.searchClient.bind(this)
    this.updateText = this.updateText.bind(this)
    this.fireClientProfile = this.fireClientProfile.bind(this)
  }

  fireClientProfile(cfid){
    this.props.actions.clientProfile(cfid)
    this.setState({
      loading: ""
    })
  }

  updateText(e){
    this.setState({
      text: this._text.value
    })

  }

  searchClient(e){
    e.preventDefault()
    var param = {
      data: this.state.text
    }
    if(this.state.text!==""){
      this.props.actions.smartSearch(param)
      this.setState({
        loading: "Loading..."
      })
  //    this._text.value = ""
      this.setState({
        text: this._text.value
      })
    }
  }

  render(){
    var ans = this.state.loading
    if(this.props.smartSearch.length>0){
       ans =(
       <div>
       <br/><br/><br/>
       <h3>#Clients: {this.props.smartSearch.length}</h3>
       <table className="table table-striped">
       <thead>
         <tr>
           <td>CFID</td>
           <td>Name</td>
           <td>Address</td>
           <td>Phone</td>
           <td></td>
         </tr>
       </thead>
       <tbody>
       {this.props.smartSearch.map((client)=>(
       <tr key={client.cfid}>
         <td>{client.cfid}</td>
         <td>{client.name}</td>
         <td>{client.address}</td>
         <td>{client.phone}</td>
         <td><button className="btn btn-link" onClick={()=>this.fireClientProfile(client.cfid)}>Client Profile</button></td>
       </tr>
       ))}
       </tbody>
       </table>
       </div>
     )
    }

    var client_profile = null
    if(this.props.filterClientProfile){
      client_profile = (
        <ClientProfile />
      )
    }

    return(
      <div className="smart-search">
        <form onSubmit={this.searchClient}>
          <input
            type="text"
            onChange={this.updateText}
            value={this.state.text}
            ref = {(e)=>this._text=e} />
          <button type="submit">Smart Search</button>
        </form>
        {ans}
        {client_profile}
      </div>
    )
  }
}

export default SmartSearch
