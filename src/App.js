import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import Preview from './components/Preview';
import CompatibilityTable from './components/CompatibilityTable';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      image: {}, 
      cropperSize: { width: null, height: null } 
    };
  }

  onDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles[0].name);
    let image = this.state.image;
    image = acceptedFiles[0];
    this.setState({ image }); 
  }

  updateCropperSize(width, height) {
    let newCropperSize = { width, height };
    this.setState({ cropperSize: newCropperSize });
  }

  render() {
    console.log('App state', this.state);
    return (
      <div className="App">
        <Dropzone onDrop={ files => this.onDrop(files) }>
          <div>Drop an image here to see its properties</div>
        </Dropzone>
        <Preview image={ this.state.image } 
                 updateCropperSize={ (width, height) => this.updateCropperSize(width, height) }/>
        <CompatibilityTable cropperSize={ this.state.cropperSize }/>
      </div>
      )
  }
}

export default App;
