import React, { Component } from 'react';

class Form extends Component {
    state = {
        user: { email: '', username: '', password: '', agreement: false, remembered: false },
        errors: {}
    }

    validate = () => {
        const errors = {};

        if (this.state.user.username.trim() === '') {
            errors.username = 'Username is required.'
        }

        else if (this.state.user.username.includes('@' && '.com') == ! true) {
            errors.username = 'Username is not valid!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }


    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });

        console.log('submitted');

    }

    handleChange = e => {
        const user = { ...this.state.user };

        if (e.currentTarget.name === 'remembered') {
            user[e.currentTarget.name] = e.currentTarget.checked;
            this.setState({ user });
        }

        if (e.currentTarget.name === 'agreement') {
            user[e.currentTarget.name] = e.currentTarget.checked;
            this.setState({ user });
        }

        else {
            user[e.currentTarget.name] = e.currentTarget.value;
            this.setState({ user });

        }
    }



}

export default Form;