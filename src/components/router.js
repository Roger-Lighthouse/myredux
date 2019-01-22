import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'

class Router extends Component {

  state={
    logged_in: false
  }

  login(){
    this.setState( prevState =>({
      logged_in: !prevState.logged_in
    }))
    console.log(this.state.logged_in)

  }

  render(){
    const myStyle = {
      color: 'red',
      backgroundColor: 'green'
    }
    return(
      <BrowserRouter>

        <div>
          <Test />
          <ul>
            <li><NavLink exact to="/" activeStyle={ myStyle }>Home</NavLink></li>
            <li><NavLink exact to="/contact" activeStyle={ myStyle }>Contact</NavLink></li>
            <li><NavLink exact to="/about" activeStyle={ myStyle }>About</NavLink></li>
            <li><NavLink exact to="/user/nut/555" activeStyle={ myStyle }>User Nut</NavLink></li>
            <input type="button" onClick={ this.login.bind(this) } value={ this.state.logged_in ? "Log out" : "Log In"}/>
          </ul>
          <Switch>
            <Route exact path="/" component={ HiHo } />
            <Route path="/contact" component={ Contact } />
            <Route path="/about" component={ About } />
//            <Route path="/user/:username/:id" component={ User } />

            <Route path="/user/:username/:id" render={({match})=>(
              this.state.logged_in ? (<User name={match.params.username}/>) : (<Redirect to="/" />)
            )} />



            <Route component={ Error } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const Test = ()=>{

  return (<h2>MY TEST</h2>)
}

const User = function( x ){
  console.log("p", x)
  return(
    <h1>Welcome {x.match.params.username}</h1>
  )
}


const HiHo = function(){
  return(
    <h1>Hi Ho</h1>
  )
}

const Contact = function(){
  return(
    <h1>Contact</h1>
  )
}

const About = function(){
  return(
    <h1>About</h1>
  )
}

const Error = function(){
  return(
    <h1>Error</h1>
  )
}

export default Router
