import React from 'react'
import Description from './Description.js'

export default class NavBar extends React.Component {
    render() {
        return (
            <div class='navbar'>

                <a href="/Description.js"> About Us</a>

                <a href="contact"> Contact Us</a>

                <h1>Pizza-Express</h1>

                <a href="location"> Location</a>

                <a href="menu"> Menu</a>

            </div>
        )
    }

}