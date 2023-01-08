import React from 'react'
import github from './assets/github.svg'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <a href="https://www.github.com/noahwhlim" target="_blank" className="footer--github">
                <img src={github}/>
            </a>
        </footer>
    )
}