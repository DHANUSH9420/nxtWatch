import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import SavedVideos from './components/SavedVideos'
import VideoDetailsView from './components/VideoDetailsView'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], activeTab: 'Home'}

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, activeTab} = this.state

    return (
      <ThemeAndVideoContext.Provider
        value={{
          activeTab,
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/id"
            component={VideoDetailsView}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
