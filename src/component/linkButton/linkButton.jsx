import React from 'react'

function LinkButton(props) {
  return (
    <a href=""
    
    className={props.isClass}>
     
      {props.text}
    </a> 
  );
}

export default LinkButton;