import React from 'react';
import './LogoLink.css'
import Logo from '../../assets/logo.svg'
import NameSite from '../NameSite/NameSite';

function LogoLink() {
  return (
  
      <div className='header__logo'>
        <a className="header__logo-link" href="#">
          <img className="logo" src={Logo} alt="logo_IrinaKavtsova" />              
        </a> 
        <NameSite/>   
      </div>  
    
   
     
  );
}

export default LogoLink;

