import React from 'react'
import photo from './assets/profile.png'
import mail from './assets/mail.svg'
import linkedin from './assets/linkedin.svg'
import './Header.css'

export default function Header() {
    return (
        <header>
            <img className="header--image" src={photo}/>
            <h1 className="header--name">Noah Lim</h1>
            <h3 className="header--job">Software Developer</h3>
            <small className="header--site">github.com/noahwhlim</small>
            <div className='header--links'>
                <a href="mailto:noahwhlim@outlook.com" target="_blank" className="header--mail">
                    <img src={mail}/>
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/noahwhlim" target="_blank" className="header--linkedin">
                    <img src={linkedin}/>
                    <p>Linkedin</p>
                </a>
            </div>
        </header>
    )
}