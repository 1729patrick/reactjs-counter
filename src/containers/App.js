import React, { Component } from 'react';
import CounterComponent from "../components/Counter";

class App extends Component {
    render() {
        return (
            <div>
                <h1>REDUX</h1>
                <CounterComponent />
            </div>
        )
    }
}

export default App;
