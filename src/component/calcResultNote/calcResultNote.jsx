import React from 'react'


function СalcResultNote(props) {
  return (
   
      <div className='calc__box'>
         <div className="results results-note">
         <div className='result'>        
           <p className='result-node'> Для обоих вариантов 
           <span className='label_result'>  {props.WS}  </span> л.
           воды из общего количества уходит на изготовления инвертного сиропа, а               
          остальное  -  на разбавление измельченных фруктов или сока           
            </p>             
         </div>

          <h3 className='label_total'>При дробном введении сахара ввиде инвертного сиропа:            
          </h3>
          <div className='result'>
             <p className='label_result'>
                 инвертный сироп всего:
              <span className='label_result'> {(props.S*1.4).toFixed(2)}  </span> л.  
               (в том числе:
              <span className='label_result'>  {props.S} </span> кг. сахара,  {props.WS} л. воды).          
            </p>            
          </div>         
          
           <p className='label_total'>
              при 3-х этапной загрузке: </p>
           <p className='label_result'>           
              делим общее количество на 3 части и получаем каждая часть:<br></br>
               всего - 
              <span className='label_result'> {props.ISt}  </span> л.
              (в том числе:  
              <span className='label_result'> {props.ISts}  </span> кг. сахара,  {props.IStw} л. воды).           
              </p>   

           <p className='label_total'>Всего ориентировочно получите дистиллята двойной перегонки при разбавлении до 40% Об.:
                     <span className='label_total'> {props.As}  </span> л.                      
            </p>   
         
   
             </div>
    
         </div>
    
  );
}

export default СalcResultNote;