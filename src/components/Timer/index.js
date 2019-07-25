import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>
                    {this.props.minutes}:{this.props.seconds}
                </h1>
            </>
        )
    }
}

export default Timer;