import React from 'react';

const Select = ({label, onChange, name, items}) => {
    return ( 
        <React.Fragment>
          <label htmlFor={name}>{label}</label>
          <select 
          onChange={onChange} 
          className="form-select mb-3" 
          name={name} 
          aria-label="Default select example">
            <option>Select {label}</option>
            { items.map(item => <option key={item.name} value={item._id}>{item.name}</option>)}
          </select>
        </React.Fragment>
     );
}
 
export default Select;