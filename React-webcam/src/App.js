import React, { Component } from 'react';
import './App.scss';
import WebcamCapture1 from './WebcamCapture/WebcamCapture1';

 
//const WebcamComponent = () => <Webcam />;

class App extends Component{
  render() {
    return (
      <div>
        <WebcamCapture1 />
      </div>
    );
  }
}

export default App;
