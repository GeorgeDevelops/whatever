import React, { Component } from 'react';

class TableHeader extends Component {

    handleSort = path => {
        const { sortColumn, onSort } = this.props;
        const sortedColumn = {...sortColumn}

        if (sortedColumn.path === path){
            sortedColumn.order = sortedColumn.order === 'asc' ? 'desc' : 'asc';
        } else {
            sortedColumn.path = path
            sortedColumn.order = 'asc'
        }
        onSort(sortedColumn)
    }

    handleSortIcon = (column) => {
        const { sortColumn } = this.props;
        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order == 'asc') return <i className='fa fa-sort-asc'></i>
        return <i className='fa fa-sort-desc'></i>
    }

    render() { 
        const { columns } = this.props;

        return (
            <thead>
                <tr>
                    {columns.map(c => 
                    <th key={c.path || c.key} style={{fontSize: '23px'}} onClick={ () => this.handleSort(c.path)}>
                        {c.label} {this.handleSortIcon(c)}
                    </th>
                    )}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;