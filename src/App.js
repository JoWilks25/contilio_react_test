import React from 'react'
import './App.scss';
import LoginPage from './pages/login/LoginPage'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false,
    }
    this.setIsLoggedIn = this.setIsLoggedIn.bind(this)
  }

  setIsLoggedIn = () => {
    this.setState({ isLoggedIn: true })
  }

  
  render () {
    return (
      <div className="App">
        {
         !this.state.isLoggedIn && (
           <LoginPage handleSubmit={this.setIsLoggedIn}/>
         )
        }
      </div>
    )
  }
}

export default App;
