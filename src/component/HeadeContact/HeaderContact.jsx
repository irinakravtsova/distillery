import React from 'react';
import './HeaderContact.css'
import Phone from '../../assets/Wapp.png';
import TG from '../../assets/TG-group.png';


function HeaderContact(props) {
  return (
    <ul className="header__contact">
      <li>
        <a 
          href="https://api.whatsapp.com/send/?phone=79219925463&text&type=phone_number&app_absent=0" 
          target="_blank">
            <img 
              className='contact-active' 
              src={Phone} alt=""/>
        </a>
      </li>
   
      <li>
        <a 
          href="https://t.me/Yuriy_Mikheev" 
          target="_blank">
            <img 
              className='contact-active'
              src={TG} alt=""/>
        </a>
      </li>
    </ul>
    
  );
}

export default HeaderContact;