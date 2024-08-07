import React from 'react'


function СalcResultNote(props) {
  return (
   
      <div className='calc__box'>
      {/* <h3 className='label_total'>
        Примечание:
      </h3> */}
      <div className="results results-note">
        <div className='result'>        
           <p className='result-node'> Для обоих вариантов 
           <span className='label_result'>  {props.WS}  </span> л.
           воды из общего количества уходит на изготовления инвертного сиропа, а               
          остальное  -  на разбавление измельченных фруктов или сока           
            </p>             
         </div>
         <p className='label_total'>Всего ориентировочно получите дистиллята двойной перегонки при разбавлении до 40% Об.:
         <span className='label_total'> {props.As}  </span>
         л. 
            </p> 
                    
      </div>
   
       
    
      </div>
    
  );
}

export default СalcResultNote;