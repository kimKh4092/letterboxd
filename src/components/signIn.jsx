import React, { Component } from 'react';
import Form from './form';
import NavBar from './navbar';
import Joi from 'joi-browser';
import '../signin-login.css'

class SignIn extends Form {

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required().min(8)
    }

    validate = () => {
        const result = Joi.validate(this.state.user, this.schema, { abortEarly: false })

        const errors = {};
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }

        return errors;

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
                <NavBar currentPage='signin' />
                <div className='signinBody'>
                    <p className='signinHead'>Sign In</p>

                    <form className={(this.state.errors.username || this.state.errors.password) ? 'form2' : 'form1'} onSubmit={this.handleSubmit} >
                        <label className='label'>Username or Email</label>
                        <input className={(this.state.user.username) ? 'inputActive' : 'input'}
                            id='username'
                            type='text'
                            name='username'
                            value={this.state.user.username}
                            onChange={this.handleChange} />

                        {this.state.errors.username && <div className='error'><p className='errorText'>{this.state.errors.username}</p></div>}


                        <label className='label'>Password</label>
                        <input className={(this.state.user.password) ? 'inputActive' : 'input'}
                            id='password'
                            type='text'
                            name='password'
                            value={this.state.user.password}
                            onChange={this.handleChange} />

                        {this.state.errors.password && <div className='error'><p className='errorText'>{this.state.errors.password}</p></div>}


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