import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap'
export default class Output extends Component {

  // one feet = 12inches
  // one inches = 2.54cm
  // one cm = 0.393inches
  // 5.7ft = 12 * 5 + 7 = 67inches = 170cm
  toFeet = (n) => {
    const realFeet = (n * 0.393700) / 12
    const feet = Math.floor(realFeet)
    const inches = Math.round((realFeet - feet) * 12)
    return `${feet}'${inches}`
  }

  toLbs = (n) => {
    const nearExact = n / 0.45359237
    const lbs = Math.floor(nearExact)
    return `${lbs} lbs`
  }
  render() {
    const height = this.toFeet(this.props.data.height)
    const weight = this.toLbs(this.props.data.weight)
    const bmi = this.props.data.bmi
    const bmiClass = this.props.data.bmiClass

    return (
      <div className="output">
        <h3>{height}</h3>
        <h3>{weight}</h3>
        <h3>{bmi}</h3>
        <h3 className={(this.props.data.bmiClass === 'Obese' ? 'danger' : '')}>{bmiClass} {(this.props.data.bmiClass === 'Obese' ? <a href="#">Help</a> : '')}</h3>      </div>

    );
  }
}

