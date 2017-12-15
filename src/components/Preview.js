import React from 'react';

export default function Preview(props) {
  console.log('PREVIEW PROPS', props);
  return (
    <div className='preview-wrapper'>
      <img src={ props.image.preview }/>
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