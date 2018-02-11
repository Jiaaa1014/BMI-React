import React, { Component } from 'react';
import { ControlLabel } from 'react-bootstrap'
import Range from './Components/Range'
import Output from './Components/Output'
import './App.css';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height: 170,
      weight: 50,
      bmi: '',
      bmiClass: 'Normal'
    }
  }
  heightChange = (height) => this.setState({ height }, this.setbmi)
  weightChange = (weight) => this.setState({ weight }, this.setbmi)


  getbmiClass = (bmi) => {
    console.log(this.state)
    if (bmi > 30) return 'Obese'
    if (bmi >= 24.9) return 'Overweight'
    if (bmi >= 18.5) return 'Normal'
    if (bmi < 18.5) return 'underweight'
  }
  setbmi() {
    let bmi = ((this.state.weight / this.state.height ** 2) * 10000).toFixed(2)
    this.setState({ bmi, bmiClass: this.getbmiClass(bmi) })
    console.log(this.state.bmi)
  }
  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <ControlLabel>Height</ControlLabel>
            <Range value={this.state.height} onChange={this.heightChange} />
          </div>
          <div>
            <ControlLabel>Weight</ControlLabel>
            <Range value={this.state.weight} onChange={this.weightChange} />
          </div>
        </form>
        <br /><br />
        <Output data={this.state} />
      </div>
    );
  }
}

export default App;
