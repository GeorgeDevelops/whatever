import React from 'react';
import Input from './common/input';
import Validation from './common/validation';

class Register extends Validation {
    state = {  
        data: {
            username: '',
            email: '',
            password: ''
        },
        errors: {

        }
    } 

    constructor(props){
        super(props)
    }

    validateAll = () => {
        const errors = {...this.state.errors};
        const { data } = this.state;

        const obj = this.validate(data);
        const keys = Object.keys(obj);
        if (keys.length === 0) return null;

        keys.map(e => {
            errors[e] = obj[e];
        });
        return errors;
    }

    handleChange = ({currentTarget:input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateOne(input);
        errors[input.name] = errorMessage;

        this.validateAll();

        const data = {...this.state.data};
        data[input.name] = input.value;
        return this.setState({ data, errors });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.validateAll()
        // calling http services
        console.log("Submitted.")
    }


    render() { 
        const { data, errors } = this.state;
        return (
            <React.Fragment>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                    type='text'
                    name='username'
                    label='Username'
                    value={data.username}
                    onChange={this.handleChange}
                    error={errors.username}
                    />
                    <Input 
                    type='email'
                    name='email'
                    label='Email'
                    value={data.email}
                    onChange={this.handleChange}
                    error={errors.email}
                    />
                    <Input 
                    type='password'
                    name='password'
                    label='Password'
                    value={data.password}
                    onChange={this.handleChange}
                    error={errors.password}
                    />
                    <button  
                    className="btn btn-primary"
                    disabled={this.validateAll()}
                    >Register</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Register;