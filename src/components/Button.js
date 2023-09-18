import React from 'react'
import Icon from './Icon'
import { useContext } from 'react';
import { ThemeContext } from "../App";


function Button() {

  const {toggleTheme} = useContext(ThemeContext);

  return (
    <button style={{
      padding: '4px',
      height: '32px',
      width: '32px',
      background: 'transparent',
      border: 'none',
      outline: 'none',
    }}
    onClick={toggleTheme}
    >
        <Icon />
    </button>
  )
}

export default Button