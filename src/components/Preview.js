import React from 'react';
import { Cropper } from 'react-image-cropper';

export default function Preview(props) {
  console.log('PREVIEW PROPS', props);
  return (
    <div className='preview-wrapper'>
      <div className='img-wrapper'>
        <Cropper src={ props.image.preview } />
      </div>
      <p>File Details:</p>
      <ul>
        <li>Name: { props.image.name }</li>
        <li>Size: { props.image.size }</li>
        <li>Type: { props.image.type }</li>
        <li>Last Modified: { JSON.stringify(props.image.lastModifiedDate) }</li>
      </ul>
    </div>
  )
}