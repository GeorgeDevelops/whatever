import React, { Component } from 'react';
import Table from './common/table';

class MovieTable extends Component {
    state = {
        columns: [
            {path: 'title', label: 'Title'},
            {path: 'genre.name', label: 'Genre'},
            {path: 'numberInStock', label: 'Stock'},
            {path: 'dailyRentalRate', label: 'Rate'},
            { key: 'like'},
            { key: 'delete'},
        ]
    }
    render() { 
      const { onMoviesRender, sortColumn, onSort } = this.props;

       return ( 
         <Table 
         columns={this.state.columns}
         onMoviesRender={onMoviesRender}
         sortColumn={sortColumn}
         onSort={onSort}
         />
       );
    }
}
 
export default MovieTable;