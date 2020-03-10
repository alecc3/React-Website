import React, { Component } from 'react'
import Sidebar from './components/sidebar'
import Intro from './components/intro'
import About from './components/about'
import Skills from './components/skills'
import Experience from './components/experience'
import Connect from './components/connect'
import {isMobile} from 'react-device-detect'
import Scrollable from 'hide-scrollbar-react';
import './App.css';
import Projects from './components/projects'


class App extends Component {
  render(){
    return (
      isMobile ?
      <div className="App">
        <sColor>
        <p>This website should be viewed on Desktop. Thanks!</p>
        <p>-Alec</p>
        </sColor>
      </div>
      :
      <div className="App">
        <div id="colorlib-page">
          <div id="container-wrap">
            <Scrollable>
            <Sidebar/>
            <Intro/>
            </Scrollable>
            <div id="colorlib-main">
              <About/>
              <Skills/>
              <Projects/>
              <Experience/>
              <Connect/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
