import React from 'react'

function Heading({
  title, 
  level,
}) {
 if (level === 'h1') {
  return (
    <h1 className='heading-h1'>{title}</h1>
  );
 }

 if (level === 'h2') {
  return (
    <h2 className='heading-h2 '>{title}</h2>
  );
 }

}

export default Heading;