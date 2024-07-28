import React from 'react'



import LogoLink from '../LogoLink/LogoLink';


import Tg from '../../assets/TG.svg'

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-wrapper'>
        < LogoLink />
        
        <a 
          href="https://t.me/IrinaKavtsova" 
          target="_blank">
            <img 
              className='contact-active'
              src={Tg} alt="telegram"/>
        </a>



        </div>
      
      </div>
    
     </header>
     
     
  );
  
}

export default Header