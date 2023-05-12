import React, { Component } from 'react';

class Form extends Component {
    state = {
        user: {
            email: '', username: '', password: '',
            agreement: false, remembered: false
        },
        errors: {}
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });

        //submit
        console.log('submitted');
        console.log(e)

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