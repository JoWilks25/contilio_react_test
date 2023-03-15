import React from 'react'
import './App.scss';
import LoginPage from './pages/login/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';

/**
 * Decided to just use simple state of triggering page change, instead of react-router
 * However if required more pages would then include react-router.
 * 
 * Did not go with typescript (though for props it would've helped a lot to provide
 * visibility). As I had to refresh myself on class components and scss for this task
 * (I predominantly use hooks based and Styled Components in my current role).
 */
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
