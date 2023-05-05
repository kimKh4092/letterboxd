import React, { Component } from 'react';
import NavBar from './navbar';
import '../signin.css'

class SignIn extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className='signinBody'>
                    <p className='signinHead'>Sign In</p>
                    <form className='form'>
                        <label className='label'>Username or Email</label>
                        <input className='input' />
                        <label className='label'>Password</label>
                        <input className='input' />
                        {/* 
                        <div className='row'>
                            <input type='checkbox' className='checkbox' />
                            <label className='label'>Remeber me</ label>


                        </div> */}


                    </form>

                    <div className='ps'>
                        <a href='#'>Reset</a> a lost or forgotten password.</div>
                </div>



            </React.Fragment>

        );
    }
}

export default SignIn;