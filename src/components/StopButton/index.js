import React from 'react';

const StopButton = props => {
    return (
        <button onClick={props.stopCountdown} >Stop</button>
    )
}

export default StopButton;