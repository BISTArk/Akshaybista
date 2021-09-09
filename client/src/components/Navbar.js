import React, { Component } from 'react'
// import "../css/homepage.scss"

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul>
                        <li><a href="#home">Hello</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
