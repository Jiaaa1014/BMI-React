import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormControl } from 'react-bootstrap'

export default class Range extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value

    }
  }
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number

  }
  static defaultProps = {
    min: 0,
    max: 245,
    step: 0
  }
  onChange = (event) => {
    this.props.onChange(this.state.value)
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="output">
        <FormControl
          type="range"
          value={this.state.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.onChange}
        />
      </div>
    );
  }
}