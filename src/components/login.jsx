import React, { Component } from 'react';
import Input from './common/input';
import Validation from './common/validation';

class Login extends Validation {
    state = { 
        data: {
            username: '',
            password: ''
        },
        errors: {}
     }

    constructor(props){
        super(props)
    }

    validateAll = () => {
        const errors = {...this.state.errors};
        const { data } = this.state;

        const obj = this.validate(data, 5, 25);
        const keys = Object.keys(obj);
        if (keys.length === 0 ) return null;

        keys.map(key => {
            errors[key] = obj[key];
        });
        return errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate(this.state.data);
        if (errors) {
            this.setState({ errors });
            return;
        }
    
        // call a server
        console.log('submitted')
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateOne(input)
        errors[input.name] = errorMessage;
    
        const data = {...this.state.data}
        data[input.name] = input.value;
        return this.setState({data, errors });
      }
    
    render() { 

        const { data, errors } = this.state;

        return (
            <React.Fragment>
                <h2>Login</h2>

                <form onSubmit={this.handleSubmit}>
                    <Input 
                    name='username'
                    value={data.username}
                    label='Username'
                    onChange={this.handleChange}
                    error={errors.username}
                    />
                    <Input 
                    name='password'
                    value={data.password}
                    label='Password'
                    onChange={this.handleChange}
                    error={errors.password}
                    />
                    <button 
                    type='submit' 
                    className="btn btn-primary"
                    disabled={this.validateAll()}
                    >Login</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Login;