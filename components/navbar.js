import React from 'react'
import NavImage from '../images/troll-face.png'

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={NavImage} alt="navbar image"/>
            <div className="nav--title">Meme Generator</div>
            <div className="nav--subtitle">React Course - Project 3</div>
        </nav>
    )
}