import React, { Component } from 'react'
import Footer from "./Footer";
// import "../css/homepage.scss"

export class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <div className="contact-me">Contact Me</div>
                <Footer></Footer>
            </section>
        )
    }
}

export default Contact
