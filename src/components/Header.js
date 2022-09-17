import React, { Component } from 'react';
import ChangeableInfo from './ChangeableInfo';
import './Header.css'

class Header extends Component{

  render () {
    return(
    <div className="header">
      <ChangeableInfo data='' value='John Johnsson'></ChangeableInfo>
    </div>
  )};
}

export default Header;
