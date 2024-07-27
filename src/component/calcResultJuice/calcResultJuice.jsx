import React from 'react'



function CalcResultJuice() {
  return (
   
      <div className='calc__box'>
      <h3 className=' label_total'>Загрузка бродильного чана при использовании отжатого фруктового (ягодного) сока:      
      </h3>
       
        <div className='results'>
          <div className='result'>
           <p className='label_result'>Количество сока:
              <span className='label_result'>  5,8 </span> л.            
            </p>            
          </div>
          <div className='result'>
           <p className='label_result'>Количество воды:
              <span className='label_result'>  5,8 </span> л.           
            </p>            
          </div>
          <div className='result'>
           <p className=' label_result'>Количество сахара:
              <span className='label_result'>   </span> кг.           
            </p>            
          </div>
          <div className='result'>
           <p className=' label_total'>Всего 
              <span className='label_total'>   </span> л.
            </p>            
          </div>

        </div>
      </div>
    
  );
}

export default CalcResultJuice;