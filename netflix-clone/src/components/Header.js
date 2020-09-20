import React, { Component } from 'react'
import logo from '../svg/logo.svg'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-top">
                    <img src={logo} alt="logo" />
                    <NavLink to="/about">Sign In</NavLink>
                        {/* <NavLink className="signIn-btn"> Sign In</NavLink> */}
                </div>
            </div>
        );
    }
}

export default Header;