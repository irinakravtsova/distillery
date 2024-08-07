import React from 'react'



function CalcResultJuice(props) {
  return (
   
      <div className='calc__box'>
      <h3 className=' label_total'>Вариант 2 - при использовании отжатого фруктового (ягодного) сока:      
      </h3>
       
        <div className='results'>
          <div className='result'>
           <p className='label_result'>Количество сока:
              <span className='label_result'> {props.J} </span> л.            
            </p>            
          </div>
          <div className='result'>
           <p className='label_result'>Количество воды:
              <span className='label_result'> {props.WJ} </span> л.           
            </p>            
          </div>
          <div className='result'>
           <p className=' label_result'>Количество сахара:
              <span className='label_result'>  {props.S}   </span> кг.           
            </p>            
          </div>
          <div className='result'>
           <p className=' label_total'>Всего загрузка
              <span className='label_total'>  {props.QJ}   </span> л. 
            </p>            
          </div>

        </div>
      </div>
    
  );
}

export default CalcResultJuice;