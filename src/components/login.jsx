import React, { Component } from 'react';
import Form from './form';
import NavBar from './navbar';
import Joi from 'joi-browser';
import '../signin-login.css'

class Login extends Form {

    schema = {
        email: Joi.string().required().email(),
        username: Joi.string().required(),
        password: Joi.string().required().min(8),
        agreement: Joi.valid(true)

    }

    validate = () => {

        const result = Joi.validate(this.state.user, this.schema, { abortEarly: false })

        const errors = {};
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }
        console.log(errors)
        return errors;
        // if (this.state.user.email.trim() === '') {
        //     errors.email = 'Email is required.'
        // }

        // if (this.state.user.username.trim() === '') {
        //     errors.username = 'Username is required.'
        // }

        // if (this.state.user.password.trim() === '') {
        //     errors.password = 'Password is required.'
        // }

        // return Object.keys(errors).length === 0 ? null : errors;
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className='signinBody'>


                    <p className='signinHead'>Join Letterboxd</p>
                    <form className={(this.state.errors.username || this.state.errors.password) ? 'LoginForm2' : 'LoginForm1'} onSubmit={this.handleSubmit}>
                        <label className='label'>Email address</label>
                        <input className={(this.state.user.email) ? 'inputActive' : 'input'}
                            id='email'
                            type='text'
                            name='email'
                            value={this.state.user.email}
                            onChange={this.handleChange} />

                        {this.state.errors.email && <div className='error'><p className='errorText'>{this.state.errors.email}</p></div>}

                        <label className='label'>Username</label>
                        <input className={(this.state.user.username) ? 'inputActive' : 'input'}
                            id='username'
                            type='text'
                            name='username'
                            value={this.state.user.username}
                            onChange={this.handleChange}
                        />

                        {this.state.errors.username && <div className='error'><p className='errorText'>{this.state.errors.username}</p></div>}

                        <label className='label'>Password</label>
                        <input className={(this.state.user.password) ? 'inputActive' : 'input'}
                            id='password'
                            type='text'
                            name='password'
                            value={this.state.user.password}
                            onChange={this.handleChange} />

                        {this.state.errors.password && <div className='error'><p className='errorText'>{this.state.errors.password}</p></div>}


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
                        {this.state.errors.agreement && <div className='error'><p className='errorText'>Agree to Terms of use</p></div>}

                        <button className='loginBtn'>SIGN UP</button>
                    </form>
                </div >
            </React.Fragment >

        );
    }
}

export default Login;