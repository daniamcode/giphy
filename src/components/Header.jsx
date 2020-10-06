import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header className='center'>
            <img src={logo} alt='' />  
            <h1>Trending GIFS right now!, by Dani Alcalà</h1>        
        </header>
    )
}

export default Header
