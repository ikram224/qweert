import React, { Component } from 'react';

class Clock extends Component {
    state = {
        time: new Date()
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.time !== prevState.time) {
            console.log('Time updated!');
        }
    }

    render() {
        return (
            <div>
                <h1>Current time:</h1>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;

