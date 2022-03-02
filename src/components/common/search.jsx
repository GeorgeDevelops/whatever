import React from 'react';

const Search = (props) => {
    const { onChange, value, placeholder, name } = props;
    return ( 
       <React.Fragment>
        <form className="d-flex">
            <input 
            className="form-control me-2" 
            type="search" 
            placeholder={placeholder} 
            aria-label="Search"
            onChange={onChange}
            value={value}
            name={name}
            ></input>
        </form>
       </React.Fragment>
     );
}
 
export default Search;