import React, { Component } from 'react';
import NavBar from './navbar';
import '../signin-login.css'

class SignIn extends Component {
    state = {
        user: { username: '', password: '', remembered: false },

    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    }

    handleChange = e => {

        const user = { ...this.state.user };
        if (e.currentTarget.name === 'remembered') {
            user[e.currentTarget.name] = e.currentTarget.checked;
            this.setState({ user });
        }

        else {
            user[e.currentTarget.name] = e.currentTarget.value;
            this.setState({ user });
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavBar currentPage='signin' />
                <div className='signinBody'>
                    <p className='signinHead'>Sign In</p>
                    <form className='form' onSubmit={this.handleSubmit} >
                        <label className='label'>Username or Email</label>
                        <input className={(this.state.user.username) ? 'inputActive' : 'input'}
                            id='username'
                            type='text'
                            name='username'
                            value={this.state.user.username}
                            onChange={this.handleChange} />

                        <label className='label'>Password</label>
                        <input className={(this.state.user.password) ? 'inputActive' : 'input'}
                            id='password'
                            type='text'
                            name='password'
                            value={this.state.user.password}
                            onChange={this.handleChange} />

                        <div className='row1'>
                            <input type='checkbox'
                                className='checkbox'
                                id='remembered'
                                name='remembered'
                                value={this.state.user.remembered}
                                onChange={this.handleChange}
                            />
                            <label className='label newLabel'>Remember me</ label>

                            <button className='signinBtn'>SIGN IN</button>
                        </div>
                    </form>

                    <div className='ps'>
                        <a href='#' className='reset'>Reset</a> a lost or forgotten password.</div>
                </div >

            </React.Fragment >

        );
    }
}

export default SignIn;