import React, { useState } from 'react';


export default function TextForm(props) {

	const handleUpClick=()=>{
		// console.log('UpperCase was clicked' + text);
	  let newttext= text.toUpperCase();	
		setText(newttext)
	}
		const handleUpChange = (event)=>{
			// console.log('onclick');
			setText(event.target.value)
		}

	const [text, setText] =useState('Enter text here');
    
	
		
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3  ">
        
        <textarea className="form-control" onChange={handleUpChange}  id="mybox" value = {text} rows="8"></textarea>

				<button className="btn btn-primary" onClick={handleUpClick} style={{ margin: '10px' }}>
  				Convert to UpperCase
				</button>

				
      </div>
    </div>
  );
}
