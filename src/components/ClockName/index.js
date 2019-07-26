import React from 'react';

class ClockName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clockName: '',
            nameIsSet: false
        }
    }

    handleNameSubmit = event => {
        event.preventDefault();
        this.setState({
            nameIsSet: true
        })
    }

    handleChange = event => {
        this.setState({
            clockName: event.target.value,
        })
    }

    renameClock = () => {
        this.setState({
            nameIsSet: false
        })
    }

    render() {
        if (this.state.nameIsSet) {
            return (
                <>
                    <span> {this.state.clockName} </span>
                    {/* <button onClick={this.renameClock}>Rename Clock</button> */}
                </>
            )
        } else {
            return (
                <form onSubmit={this.handleNameSubmit} >
                    <input
                        type='text'
                        name='clock-name'
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                    <button type='submit' value='submit'>Submit</button>
                </form>
            )
        }
    }
}

export default ClockName;