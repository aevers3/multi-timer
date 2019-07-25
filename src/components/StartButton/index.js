import React from 'react';

class StartButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <button onClick={this.props.startCountdown} >Start</button>
            </>
        )
    }
}

export default StartButton;