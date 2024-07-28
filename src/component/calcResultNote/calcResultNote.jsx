import React from 'react'


function СalcResultNote(props) {
  return (
   
      <div className='calc__box'>
      <h3 className='label_total'>
        Примечание:
      </h3>
      <div className="results">
        <div className='result'>        
           <p className='result-node'> Для обоих вариантов 
           <span className='label_result'>  {props.WS}  </span> л.
           воды из общего количества уходит изготовления инвертного сиропа, а               
          остальное  -  на разбавление измельченных фруктов или сока           
            </p>            
         </div>
      </div>
   
       
    
      </div>
    
  );
}

export default СalcResultNote;