import React, { Component } from 'react';

class Like extends Component {

    getClass = () => {
        let classes = 'fa fa-heart';
        if (!this.props.liked){
            return classes += '-o';
        }
        return classes;
    }

    render() {
        return (
            <i style={{ cursor: 'pointer'}} 
            className={ this.getClass() }
            onClick={this.props.onLike}>
            </i>
        );
    }
}
 
export default Like;