import { ThemeContext } from "./App"
import { useContext } from "react"
const Component = () => {
    const darkTheme = useContext(ThemeContext)
    const styleTheme = {
       backgroundColor: darkTheme? '#333': '#CCC',
       color: darkTheme? '#CCC' : '#333',
       padding: '2rem',
       marging: '2rem'
    }
    
    return(
        <div style={styleTheme}>THEME</div>
    )
}

export default Component