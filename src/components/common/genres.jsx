import React from 'react';

const Genres = ({ items, onGenreFilter, currentGenre }) => {
    return (
        <ul style={{display: 'inline-block'}} className="list-group">
            <li onClick={() => onGenreFilter('All genres')} className={'All genres' === currentGenre ? "list-group-item active" : "list-group-item"}>All genres</li>
            {
            items.map(g => <li key={g.name} style={{ textAlign: 'center'}}
                className={g.name === currentGenre ? "list-group-item active" : "list-group-item"}
                onClick={() => onGenreFilter(g.name)}
                >{g.name}</li>)
            }
        </ul>
    );
}
 
export default Genres;