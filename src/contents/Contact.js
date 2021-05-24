import React, { Component } from 'react'

import Social from '../components/Social'

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h2>Email : panupat.bos@gmail.com</h2>
                <h3>Instagram : bospanupat</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;