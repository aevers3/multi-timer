import React from 'react';

class TimerInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h4>Enter your time:</h4>
                <input name='minutes' type='number' minutes={this.props.minutes} onChange={this.props.handleChange} required />
                :
                <input name='seconds' type='number' seconds={this.props.seconds} onChange={this.props.handleChange} required />
            </>
        )
    }
}

export default TimerInput;