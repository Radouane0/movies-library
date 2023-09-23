import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='col col-sm-4'>
            <input className='form-control' 
            placeholder='Rechercher un film'
            value={props.value}
            onChange={(e) => props.setSearchMovie(e.target.value)}>
            </input> 
        </div>
    );
};

export default SearchBar;