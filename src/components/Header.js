import React from 'react'
import logo from '../logo.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='logo' className='header-image' />
      <h2 className='header-title'>Meme Generator</h2>
      <h4 className='header-project'>React Project 4</h4>
    </header>
  )
}

export default Header