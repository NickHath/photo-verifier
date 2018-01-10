import React, { Component } from 'react';
import { Cropper } from 'react-image-cropper';

export default class Preview extends Component {
  // inspectImage() {
  //   console.log(this.refs.cropper.values());
  // }

  render() {
    return (
      <div className='preview-wrapper'>
        <div className='img-wrapper'>
          <Cropper src={ this.props.image.preview } 
                   width='100%'
                   height='100%'
                   fixedRatio={ false }
                   ref='cropper'
                   onImgLoad= { (values) => this.props.updateCropperSize(this.refs.cropper.values().imgWidth, this.refs.cropper.values().imgHeight) }
                   onChange={ (values) => this.props.updateCropperSize(values.width, values.height) }/>
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