import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
        <div className='row'>
            <div className="col-1">
            <span className={this.getBgClass()}>{ this.formatCount() }</span>
            </div>
            <div className="col">
            <button  onClick={ this.props.onIncrement } className='btn btn-secondary btn-sm'>+</button>
            <button onClick={ this.props.onDecrement } disabled={ this.props.counter.value === 0 && true} className="btn btn-secondary btn-sm m-2">-</button>
            <button onClick={this.props.onDelete} className="btn btn-danger btn-sm">x</button>
            </div>
        </div>);
    }

    getBgClass(){
        let classes = 'badge m-2 text-dark bg-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count
    }
}
 
export default Counter;