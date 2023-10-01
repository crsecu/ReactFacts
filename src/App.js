import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkModeTheme, setDarkModeTheme] = useState(false);

    function toggleDarkMode() {
      setDarkModeTheme((prevState) => {
        return !prevState;
      })
    }

    return (
        <div className="container">
            <Navbar 
            toggleDarkMode = {toggleDarkMode}
            darkMode = {darkModeTheme}
            />
            <Main  darkMode = {darkModeTheme}/>
        </div>
    )
}