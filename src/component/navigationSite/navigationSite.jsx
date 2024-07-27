import React from 'react'
import './navigationSite.css'
import NavigationItem from '../navigationItem/navigationItem'

const navItems = [
  {
    text: "Обо мне",
    link: '#about'
  },
  {
    text: "Услуги и цены",
    link: '#services'
  },
  {
    text: "Контакты",
    link: '#contacts'
  }
 
]

function NavigationSite() {
  return (
    <ul className='nav__list'>
      { navItems.map(navItem => (
        < NavigationItem
            text = {navItem.text}
            link = {navItem.link}
            isClassLi = {'nav__item'}
            isClassLink = {'nav__link'} />
      ))}
    </ul> 
   
             
  );
}

export default NavigationSite;