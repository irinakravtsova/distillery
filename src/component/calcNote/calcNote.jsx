import React from 'react'
import './calcNote.css' 

import Form from '../Form/Form'
import Bgr from '../../assets/bg.png'



function CalcNote() {
  return (
  
      <div className='calc__box'>
        <h3 className='label_total'>Примечание:</h3>
        <ul className='results'>
          <li className='result-node'>
             - хорошей идеей будет взять объем готовой к перегонке браги равным объему, вмещающемуся в ваш перегонный куб;
          </li>
          <li className='result-node'>
             - желаемая крепость браги зависит от спиртоустойчивости дрожжей;
          </li>
          <li className='result-node'>
             - количество сахара в фруктах измеряется с помощью приборов или берется по таблицам
          </li>
        </ul>

  
        
      </div>

  
  );
}

export default CalcNote;