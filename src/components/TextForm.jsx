import React, { useState } from 'react';


export default function TextForm(props) {

	const handleUpClick=()=>{
		// console.log('UpperCase was clicked' + text);
	  let newttext= text.toUpperCase();	
		setText(newttext)
	
	}
	const handlelowClick=()=>{
		let newtext = text.toLowerCase();
		setText(newtext)
	}
	
		const handleUpChange = (event)=>{
			// console.log('onclick');
			setText(event.target.value)
		}

	const [text, setText] =useState('');
    
	
		
  return (
		<>
    <div  className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3  ">
        
        <textarea className="form-control" onChange={handleUpChange}  id="mybox" value = {text} rows="8"></textarea>

				<button className="btn btn-primary mx-2" onClick={handleUpClick} style={{ margin: '10px' }}>
  				Convert to UpperCase
				</button>		

				<button className="btn btn-primary mx-2" onClick={handlelowClick} >
  				Convert to LowerCase
				</button>	

      </div>
			<div className='container my-3' >
				<h2>Your text summary</h2>
				<p>{text.split(" ").length} words and {text.length} character</p>
				<p> {0.0008 * text.split("").length} Minutes to read</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		
    </div>
		</>
  );
}
