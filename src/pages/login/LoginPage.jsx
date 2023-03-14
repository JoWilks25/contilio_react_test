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
    const { username, password } = this.state
    // Keep button disabled til user entered more than 1 character into username & password input
    return !!(username.length === 0 || password.length === 0)
  }

  render() {
    const { handleChange, disableCheck, handleClick } = this;
    return (
      <div className="LoginPage">
        <h1>The App</h1>
        <p>Please enter your details and press Submit to continue</p>
        <input className='input' type='text' name='username' placeholder='Username' onChange={handleChange} />
        <input className='input' type='password' name='password' placeholder='Password' onChange={handleChange} />
        <button disabled={disableCheck()} onClick={handleClick}>Submit</button>
      </div>
    )
  }
}

export default LoginPage;
