import React from "react";
import Clock from './components/Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClocks: 1,
      // We will map over this array to add clocks
      clocksArr: ['clocks']
    }
  }

  createClock = () => {
    const arr = [{'clockID': 1}];
    for (let i = 0; i < this.state.numOfClocks; i++) {
      // Iterate and set a different ID for each clock in array
      arr.push({'clockID': (i + 2)})
    }
    // Set state to reflect number of clocks and clockID for each.
    this.setState({
      numOfClocks: this.state.numOfClocks + 1,
      clocksArr: arr
    })
  }

  render() {
    console.log('clockArr', this.state.clocksArr);
    console.log('clocks', this.state.numOfClocks);
    const clocks = this.state.clocksArr.map(clock => (
        <>
          <Clock />
        </>
    ));

    return (
      <div>
        <button onClick={this.createClock} >Add Clock</button>
        {clocks}
      </div>
    )

    // return (
    //   // <>
    //   //   <button onClick={this.createClock} >Add Clock</button>
    //   //   <Clock />
    //   // </>
    // )
  }
}


export default App;