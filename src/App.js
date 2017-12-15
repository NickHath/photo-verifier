import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Preview from './components/Preview';
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
        <Dropzone onDrop={ files => this.onDrop(files) }>
          <div>Drop an image here to see its properties</div>
        </Dropzone>
        <Preview image={ this.state.image }/>
      </div>
      )
  }
}

export default App;
