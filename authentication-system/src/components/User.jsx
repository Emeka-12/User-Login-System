import React, { Component } from 'react'
import './user.css'

class User extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         middleName: '',
         lastName: '',
         password: '',
      }
       this.handleSubmit = this.handleSubmit.bind(this)
    }

    firstHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    middleHandler = (event) => {
        this.setState({
            middleName: event.target.value
        })
    }
    lastHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName}  ${this.state.lastName} Welcome !!!!`)
        this.setState({
            firstName: '',
            middleName: '',
            lastName: '',
            password: '',
        })
    }

    // event.preventDefault()
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h1>USER REGISTRATION</h1>
            <label>First Name: </label> <input type="text" value={this.state.firstName} onChange= {this.firstHandler} placeholder= '  enter your first name...' required /> <br/>
            <label>Middle Name: </label> <input type="text" value={this.state.middleName} onChange= {this.middleHandler} placeholder= ' enter your middle name...' /> <br/>
            <label>Last Name: </label> <input type="text" value={this.state.lastName} onChange= {this.lastHandler} placeholder= '  enter your last name...' required /> <br/>
            <label>Password: </label> <input type="password" value={this.state.password} onChange= {this.passwordHandler} placeholder= '  enter password...' required /> <br/>
            <input type="submit" value='Submit' className='submit'/>
        </form>
      </div>
    )
  }
}

export default User


