import React from 'react';


const Input = ({ label, name, value, onChange, error, type, min, max, step, placeholder, classes='form-control' }) => {
    return ( 
        <div className="mb-3">
            <label 
            htmlFor={name} 
            className="form-label"
            >{label}</label>
            <input 
            type={type} 
            id={name} 
            className={`${classes}`} 
            value={value}
            onChange={onChange}
            name={name}
            autoFocus={ name === 'username' && true}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            />
            { error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;