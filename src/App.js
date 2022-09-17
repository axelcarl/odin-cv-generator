import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import ChangeableImage from './components/ChangeableImage';

class App extends Component{

  render () {
    return(
    <div className="App">
      <div className='background'>
        <Header></Header>
        <ChangeableImage value='https://thumbs.dreamstime.com/b/mature-smiling-business-manager-crossing-his-arms-front-his-business-team-92421154.jpg'></ChangeableImage>
        <Experience></Experience>
        <Experience></Experience>
        <Experience></Experience>
        <PersonalInfo></PersonalInfo>
      </div>
    </div>
  )};
}

export default App;
