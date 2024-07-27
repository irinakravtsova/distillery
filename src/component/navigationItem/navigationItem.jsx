import React from 'react'


function NavigationItem({
  isClassLi, 
  isClassLink, 
  link, 
  text}) {
  return (
   
      <li className={isClassLi}>
        <a className={isClassLink} href={link}>{text}</a>
      </li>
     
  );
}

export default NavigationItem;