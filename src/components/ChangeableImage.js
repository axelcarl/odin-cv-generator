import React, { Component } from 'react';
import './ChangeableImage.css'

class ChangeableImage extends Component {
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
    let displayValue;
    let closeButton;
    let inputField;
    let classNameBe;
    if (this.state.displayInput === false) {
      displayValue = this.state.value;
      closeButton = '';
      inputField = '';
      classNameBe = 'image-component';

    }
    else {
      classNameBe = 'image-component-off'
      inputField = <input
        onChange={this.handleChange}
        value={displayValue}></input>;
      closeButton = <button onClick={this.updateInfo} type='button'>close</button>;
    }
    return (
      <div className={classNameBe}>
        <img
          onClick={this.changeVal}
          className={this.props.class}
          src={displayValue} 
          alt=''>
        </img>
        {inputField}
        {closeButton}
        </div>
        )
  };
}

export default ChangeableImage;
