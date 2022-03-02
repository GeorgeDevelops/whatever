import React, { Component } from 'react';
import Counter from './counterComponent';

class Counters extends Component {
    render() { 
        const { onReset, counters, onIncrement, onDelete, onDecrement } = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                { counters.map(c => <Counter key={ c.id } 
                onIncrement={() => onIncrement(c)  } 
                onDecrement={() => onDecrement(c)}
                onDelete={() => onDelete(c)} 
                counter={c} 
                />) }
            </div>
        );
    }
}
 
export default Counters;