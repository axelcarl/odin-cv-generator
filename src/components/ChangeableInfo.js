import React, { Component } from 'react';
import './ChangeableInfo.css'

class ChangeableInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value,
      displayInput: false,
    }
  }

  changeVal = () => {
    this.setState({
      displayInput: true
    })
  }

  handleChange = (e) => {
    this.setState(
      { value: e.target.value }
    )
  }

  updateInfo = (e) => {
    this.setState({
      displayInput: false
    })
  }

  render() {
    let showColon = ':';
    if (this.props.data === '')
      showColon = '';
    let displayValue;
    let closeButton;
    if (this.state.displayInput === false) {
      displayValue = this.state.value;
      closeButton = '';
    }
    else {
      displayValue = <input
        onChange={this.handleChange}
        value={this.state.value}></input>;
      closeButton = <button onClick={this.updateInfo} type='button'>close</button>;
    }
    return (
      <div className='info-component'>
        <div
          onClick={this.changeVal}
          className={this.props.class}>
          {this.props.data}{showColon} {displayValue}
        </div>
        {closeButton}
        </div>
        )
  };
}

export default ChangeableInfo;
