import React, { Component } from 'react'
import Navbar from '../components/Navbar'
// import Particle from '../utils/Particles'
export class Homepage extends Component {
    render() {
        return (
            <section className="home">
                {/* <Particle/> */}
                <Navbar/>
                <div className="intro"><h2><div className="animate__animated animate__lightSpeedInRight">Hello!</div> <br/><div className="animate__animated animate__lightSpeedInLeft">I`m Akshay Bistagond</div></h2></div>
            </section>
        )
    }
}

export default Homepage
