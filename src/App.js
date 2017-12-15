import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { image: {} };
  }

  onDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles[0].name);
    let image = this.state.image;
    image = acceptedFiles[0];
    this.setState({ image }); 
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Dropzone onDrop={(files) => this.onDrop(files)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <img src={ this.state.image.preview }/>
      </div>
      )
  }
}

export default App;
