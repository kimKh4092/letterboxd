import React, { Component } from 'react';
import NavBar from './navbar';
import '../signin-login.css'

class Login extends Component {

    state = {
        user: { email: '', username: '', password: '', agreement: false }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    }

    handleChange = e => {

        const user = { ...this.state.user };
        if (e.currentTarget.name === 'agreement') {
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
                <NavBar />
                <div className='signinBody'>
                    <p className='signinHead'>Join Letterboxd</p>
                    <form className='LoginForm' onSubmit={this.handleSubmit}>
                        <label className='label'>Email address</label>
                        <input className={(this.state.user.email) ? 'inputActive' : 'input'}
                            id='email'
                            type='text'
                            name='email'
                            value={this.state.user.email}
                            onChange={this.handleChange} />

                        <label className='label'>Username</label>
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

                        <div className='row2'>
                            <input type='checkbox'
                                className='checkbox'
                                id='agreement'
                                name='agreement'
                                value={this.state.user.agreement}
                                onChange={this.handleChange} />
                            <label className='label newLabel'>I'm at least 16 years old and
                                accept the Terms of Use</ label>
                        </div>
                        <button className='loginBtn'>SIGN UP</button>
                    </form>
                </div >
            </React.Fragment >

        );
    }
}

export default Login;