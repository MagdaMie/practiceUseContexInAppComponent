import React, { useState } from "react"
import Component from "./Component"

export const ThemeContext = React.createContext()


function App() {
  const[darkTheme, setdarkTheme] = useState(true)

  const toggleTheme = () => {
    setdarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
    <ThemeContext.Provider value={darkTheme}>
      <Component />
      <button onClick={toggleTheme}>toggle theme</button>
    </ThemeContext.Provider>
    </>
  )
}

export default App
