import React, { useContext } from 'react'
import logo from '../logo.svg';
import Navbar from './Navbar';
import { ThemeContext } from "../App";


function Header() {
  const {theme} = useContext(ThemeContext);
    const background = theme === 'light'
        ? 'lightgrey'
        : '#000'
  return (
    <header style={{
        background,
        display: 'flex', 
        justifyContent: 'space-between',
        padding: '4px 18px'
        }}>
        <img src={logo} height={32} alt="logo" />

        <Navbar />
    </header>
  )
}

export default Header