import React from 'react';
import TimerInput from "../TimerInput";
import Timer from '../Timer';
import StartButton from '../StartButton';
import StopButton from '../StopButton';
import ClockName from '../ClockName';
import './style.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '00'
    }
    
    this.handleChange = this.handleChange.bind(this);

    this.startCountdown = this.startCountdown.bind(this);

    this.tick = this.tick.bind(this);

    this.stopCountdown = this.stopCountdown.bind(this);
  }
  
  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      // minutes: event.target.value,
      // seconds: event.target.value
      [name]: value
    })
  }

  tick () {
    console.log('secsleft', this.secondsRemaining);
    const min = Math.floor(this.secondsRemaining / 60);
    console.log('min', min * 60);
    const sec = this.secondsRemaining - (min * 60);
    console.log('sec', sec);

    this.setState({
      minutes: min,
      seconds: sec
    })

    if (sec < 10) {
      this.setState({
        seconds: '0' + this.state.seconds
      })
    }

    if (min < 10) {
      this.setState({
        value: '0' + min
      })
    }

    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandle)
    }

    this.secondsRemaining--;
  }

  startCountdown() {
    console.log(this.state.seconds)
    let min = this.state.minutes;
    console.log(min);
    this.secondsRemaining = (min * 60 + (parseInt(this.state.seconds) - 1));
    console.log('secs', this.secondsRemaining)
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  stopCountdown () {
    console.log('stop hit')
    clearInterval(this.intervalHandle);
  }

  // removeClock() {
  //   clearInterval(this.intervalHandle);
  // }


  render() {
    if (this.state.minutes !== '00' || this.state.seconds !== '00') {
      return (
        <div className='clock'>
        <ClockName />
        <TimerInput minutes={this.state.minutes} seconds={this.state.seconds} handleChange={this.handleChange} />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <StartButton startCountdown={this.startCountdown} />
        <StopButton stopCountdown={this.stopCountdown} />
      </div>
    )
  } else {
    return (
      <div className='clock'>
      <ClockName />
      <TimerInput minutes={this.state.minutes} seconds={this.state.seconds} handleChange={this.handleChange} />
      <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
    </div>
  )
  }
  }
}

export default Clock;
