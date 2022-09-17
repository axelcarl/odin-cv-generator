import React, { Component } from 'react';
import ChangeableInfo from './ChangeableInfo';
import './PersonalInfo.css'

class PersonalInfo extends Component{

  render () {
    return(
    <div className="personal-info">
      <ChangeableInfo data='Email' value='john@email.com'></ChangeableInfo>
      <ChangeableInfo data='Number' value='+030 234 234'></ChangeableInfo>
      <ChangeableInfo data='Age' value='27 Years'></ChangeableInfo>
      <ChangeableInfo data='City' value='California'></ChangeableInfo>
    </div>
  )};
}

export default PersonalInfo;
