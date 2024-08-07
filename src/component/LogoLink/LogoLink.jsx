import React from 'react';
import './LogoLink.css'
import Logo from '../../assets/logo2.png'
import NameSite from '../NameSite/NameSite';

function LogoLink() {
  return (
    <>
       <div className='header__logo'>
        <a className="header__logo-link" 
            href="https://t.me/distillery_Irina"
            target='_blank'>            
          <img className="logo" src={Logo} alt="logo_IrinaKavtsova" />              
        </a>      
       </div> 
      <NameSite/> 
    </>
  
      
    
   
     
  );
}

export default LogoLink;

