import React, { Component } from 'react';
import ChangeableInfo from './ChangeableInfo';
import './Experience.css'

class Experience extends Component{

  render () {
    return(
    <div className="experience">
      <ChangeableInfo class='exp-title' data='' value='School or Work Experience'></ChangeableInfo>
      <ChangeableInfo data='Position/Degree' value='Computer Science'></ChangeableInfo>
    </div>
  )};
}

export default Experience;
