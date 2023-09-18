import Header from "./components/Header";

import { useState, createContext, useContext } from "react";
export const ThemeContext = createContext("light");


export default () => {  

  const [theme, setTheme] = useState('light')

  const toggleTheme = (event) =>  setTheme(theme === 'light' ? 'dark' : 'light')
  
  return <ThemeContext.Provider value={{theme, toggleTheme}}>
    <Header/>
  </ThemeContext.Provider>
}


 