import React, { Component } from 'react';

class Validation extends Component {

validateOne = ({value, id}, min, max) => {
    if (value === '') return `${id} is required.`;
    if (value.length < min ) return `${id} must be at least ${min} characters long.`;
    if (value.length > max ) return `${id} cannot be more than ${max} characters long.`;
}
    
validate = (inputs, min, max) => {
    const ex = {}

    const keys = Object.keys(inputs)
    keys.map(key => {
        if (inputs[key] === '') return ex[key] = `${key} is required.`;
        if (inputs[key].length < min) return ex[key] = `${key} must be at least ${min} characters long.`;
        if (inputs[key].length > max) return ex[key] = `${key} cannot be more ${max} characters long.`;
    });
    const obj = Object.keys(ex);

    return obj.length < 1 ? ex : ex;
  }
}
 
export default Validation;