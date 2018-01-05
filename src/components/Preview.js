import React, { Component } from 'react';
import { Cropper } from 'react-image-cropper';

export default class Preview extends Component {
  inspectImage() {
    console.log(this.refs.cropper.values());
  }

  render() {
    return (
      <div className='preview-wrapper'>
        <div className='img-wrapper'>
          <Cropper src={ this.props.image.preview } 
                   styles={{ 'width': '100%', 'height': '100%' }}
                   ref='cropper'
                   onChange={ () => this.inspectImage() }/>
        </div>
        <p>File Details:</p>
        <ul>
          <li>Name: { this.props.image.name }</li>
          <li>Size: { this.props.image.size }</li>
          <li>Type: { this.props.image.type }</li>
          <li>Last Modified: { JSON.stringify(this.props.image.lastModifiedDate) }</li>
        </ul>
      </div>
    )
  }
}