import React from 'react'
import './App.scss';
import LoginPage from './pages/login/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
    }
    this.setIsLoggedIn = this.setIsLoggedIn.bind(this)
  }

  setIsLoggedIn = () => {
    this.setState({ isLoggedIn: true })
  }

  render() {
    const { setIsLoggedIn, state: { isLoggedIn } } = this;
    return (
      <div className="App">
        {
          isLoggedIn ?
            (<DashboardPage />)
            : (
              <LoginPage handleSubmit={setIsLoggedIn} />
            )
        }
      </div>
    )
  }
}

export default App;
