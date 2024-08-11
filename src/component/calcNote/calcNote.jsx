import React from 'react'
import './calcNote.css' 

import Form from '../Form/Form'
import Bgr from '../../assets/bg.png'



function CalcNote(props) {
  return (
    <div className="calc-note">
  
      <div className='calc__box'>
        <h3 className='label_total'>При дробном введении сахара ввиде инвертного сиропа:</h3>
       <div className="results">

      
        <div className='result'>
           <p className='label_result'>
           инвертный сироп всего:
              <span className='label_result'> {props.IS}  </span> л.           
            </p>            
          </div>

         
           <p className='label_result'>
           в том числе:
              <span className='label_result'>  {props.S} </span> кг. сахара,  {props.Ws} л. воды.          
            </p> 
          

         
           <p className='label_total'>
           при 3-х этапной загрузке делим общее количество на 3 части и получаем каждая часть всего:
              <span className='label_result'> {props.ISt}  </span> л.           
            </p>            
        

       
           <p className='label_result'>
           в том числе:
              <span className='label_result'> {props.ISts}  </span> кг. сахара,  {props.ISts} л. воды.            
            </p> 
            {/* <p className='label_result'>
         
              <span className='label_result'> {props.IStw} </span> л. воды           
            </p>               */}
         

         
          <p className='label_total'>Всего получите готовой к перегонке браги крепостью 14% Об.:  </p> 
            <p className='label_result'>
               при использовании измельченных фруктов: 
               <span className='label_result'> {props.Bm}  </span>
               л. 
            </p>
            <p className='label_result'>
               при использовании сока: 
               <span className='label_result'> {props.B}  </span>
               л. 
            </p>

            <p className='label_total'>Всего ориентировочно получите дистиллята двойной перегонки при разбавлении до 40% Об.:  </p> 
            <p className='label_result'>
               при использовании измельченных фруктов: 
               <span className='label_result'> {props.As}  </span>
               л. 
            </p>
            <p className='label_result'>
               при использовании сока:                
               <span className='label_result'> {props.AsJ}  </span>
               л. 
            </p>
                 
       
    

  
            </div> 
      </div>
      </div>
  
  );
}

export default CalcNote;