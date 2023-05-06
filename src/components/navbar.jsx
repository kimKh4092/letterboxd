import React, { Component } from 'react';
import ltrboxd from '../images/logo.png'
import search from '../images/search.png'

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav >
                <div className='navBar'>

                    <img className='navLogo' src={ltrboxd} ></img>

                    <a href='/' className='navHead'>Letterboxd</a>
                    <a href='/sign-in' className='navItems'>SIGN IN</a>
                    <a href='/create-account' className='navItems'>CREATE ACCOUNT</a>
                    <a href='/films' className='navItems'>FILMS</a>
                    <a href='/lists' className='navItems'>LISTS</a>
                    <a href='/members' className='navItems'>MEMBERS</a>
                    <form >

                        <input className='search' type='text' />
                        <button className='searchIcon'><img className='searchPic' src={search} /></button>


                    </form>


                </div>
            </nav>
        );
    }
}

export default NavBar;