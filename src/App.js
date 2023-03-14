import React from 'react'
import './App.scss';
import LoginPage from './pages/login/LoginPage';
import DashboardPage from './pages/dashboard/Dashboard';

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
         !this.state.isLoggedIn ? 
          (<DashboardPage />)
         : (
           <LoginPage handleSubmit={this.setIsLoggedIn}/>
         )
        }
      </div>
    )
  }
}

export default App;
