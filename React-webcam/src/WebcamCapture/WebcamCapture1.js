import Webcam from "react-webcam";
import React, { Component } from 'react';
import Websocket from 'react-websocket';
import Image from 'react-bootstrap/Image'

class WebcamCapture1 extends Component{
  constructor(props){
    super(props);
    this.state ={
      imageUrl :null
    }
  }
  // setRef = webcam => {
  //   this.webcam = webcam;
  // };

  capture = () => {
    var imageSrc = this.refs.webcam.getScreenshot();
    this.setState({imageUrl: imageSrc});
    //const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc)
    this.setState({
      imageUrl : imageSrc
    })
  };
    
  onUserMedia =()=>{
    console.log(this.refs.webcam);
  }
  //  capture =() =>{
  //          const imageSrc = this.webcamRef.current.getScreenshot();
  //          console.log(imageSrc);
  //          this.setState({
  //            imageUrl : imageSrc
  //          })
  //        };

    render(){

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
        
        // React.useEffect(() => {
        //   console.log(webcamRef.current)
          
        //   if (webcamRef.current.stream) {
        //     webcamRef.current.stream.addEventListener()
        //   }
        // }, [webcamRef]
        // )
      
        return (
          <>
         
            <Webcam
              audio={false}
              height={300}
              ref='webcam'
              screenshotFormat="image/jpeg"
              width={500}
              videoConstraints={videoConstraints}
              onUserMedia={this.onUserMedia}
            />
            <button onClick={this.capture.bind(this)}>Capture photo</button>
            { this.state.imageUrl ? <img src={this.state.imageUrl} /> : null }
            {/* <img src={`data:image/jpeg;base64,${this.state.imageUrl}`} alt ="hi captured"></img> */}

          </>
        );
    }
}

export default WebcamCapture1;