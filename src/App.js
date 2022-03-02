import React, { Component } from 'react';
import Movie from './components/movies';
import Counters from './components/counters';
import NavBar from './components/navbar';
import { Routes, Route, Outlet } from 'react-router-dom';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }


    handleDelete = counter => {
        const counters = this.state.counters.filter(c => c.id !== counter.id);
        this.setState({ counters: counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({ counters })
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter);
        counters[index].value--
        this.setState({ counters })
    }

    render() {

        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0)} />
                <main className='container'>

                    {/* <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    /> */}
                </main>
            </React.Fragment>
        );
    }
}

export default App;