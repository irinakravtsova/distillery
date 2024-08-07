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
           <p className='label_total'>Всего загрузка:
              <span className='label_result'> {props.Q}  </span> л.        
            </p>                                  
          </div>             
      
          <p className=' label_result'>
            Подготовьте подходящую бродильную ёмкость                       
          </p>           
            
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
    
    
  );
}

export default CalcResultFruits;