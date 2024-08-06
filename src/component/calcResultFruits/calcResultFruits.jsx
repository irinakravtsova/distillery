import React from 'react'


function CalcResultFruits(props) {
  return (
   
      <div className='calc__box'>
        <h2 className='h2 result-h2' id='result'>Получите результаты расчетов</h2>
      <h3 className='label_total'> 
         при использовании измельченных фруктов или сока вам необходимо взять:
      </h3>
       
        <div className='results'>
          <div className='result'>
           <p className=' label_result'>
           Сахара:
              <span className='label_result'>  {props.S}   </span> кг.           
            </p>            
          </div>

          <div className='result'>
           <p className='label_result'>
            Воды всего:
              <span className='label_result'>  {props.W}</span> л.           
            </p>            
          </div>

          <div className='result'>
           <p className=' label_result'>
            в том числе на приготовление инвертного сиропа
              <span className='label_result'>  {props.Ws}</span> л.           
            </p>            
          </div>
          <div className='result'>
           <p className='label_total'>Всего загрузка при использовании сока будет
              <span className='label_result'> {props.QJ}  </span> л.        
            </p>            
          </div>

        
          <div className='result'>
           <p className='label_total'>а если вы возьмёте  измельченные фрукты, то
              <span className='label_result'> {props.Q}  </span> л.        
            </p> 
                                 
          </div>
          <p className=' label_result'>
            Подготовьте подходящую бродильную ёмкость
                       
            </p> 

        </div> 
        
      

        </div>
    
    
  );
}

export default CalcResultFruits;