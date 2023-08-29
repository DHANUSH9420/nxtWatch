import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  savedVideos: [],
  activeTab: 'Home',
  changeTab: () => {},
  addVideo: () => {},
})
export default ThemeAndVideoContext
