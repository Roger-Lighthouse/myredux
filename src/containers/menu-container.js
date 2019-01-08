import React, { Component } from 'react'
import MenuButton from '../components/menu-button'
import Menu from '../components/menu'

class MenuContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      visible: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  handleMouseDown(e){
    this.toggleMenu()
    e.stopPropagation()
  }


  toggleMenu(){
    this.setState({
      visible: !this.state.visible
    })
  }

  render(){
    return(
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu handleMouseDown={this.handleMouseDown}
              menuVisibility={this.state.visible} />
        <div>
          <ul>
            <li>ball</li>
            <li>bat</li>
            <li>puck</li>
            <li>cookie</li>
            <li>helmet</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MenuContainer
