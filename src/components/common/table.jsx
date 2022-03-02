import React from 'react';
import TableHeader from './tableHeader';

const Table = ({ onMoviesRender, onSort, columns, sortColumn }) => {
    return ( 
        <table style={{  width: '90%'}} className="table">
            <TableHeader
            columns={columns}
            sortColumn={sortColumn}
            onSort={onSort}
            />
            <tbody>
              { onMoviesRender } 
            </tbody>
        </table>
     );
}
 
export default Table;