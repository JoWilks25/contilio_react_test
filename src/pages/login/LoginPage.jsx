import React from 'react'
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      enableSubmitButton: false,
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick = () => {
    this.props.handleSubmit()
  }

  disableCheck = () => {
    // Keep button disabled until user has entered more than 1 character into the username and password input
    return !!(this.state.username.length === 0 || this.state.password.length === 0)
  }

  render() {
    return (
      <div className="LoginPage">
        <h1>The App</h1>
        <p>Please enter your details and press Submit to continue</p>
        <input className='input' type='text' name='username' placeholder='Username' onChange={this.handleChange} />
        <input className='input' type='password' name='password' placeholder='Password' onChange={this.handleChange} />
        <button disabled={this.disableCheck()} onClick={this.handleClick}>Submit</button>
        {this.state.inputErrorMsg && <div>{this.state.inputErrorMsg}</div>}
      </div>
    )
  }
}

export default LoginPage;
