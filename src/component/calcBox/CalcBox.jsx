import React from 'react'
import './CalcBox.css' 

import Form from '../Form/Form'
import Bgr from '../../assets/bg.png'



function CalcBox() {
  return (
  
      <div className='calc__box'>
        <h2 className='h2'>Введите исходные данные</h2>
        <Form 
            isClass= {'form__wrapper'}
            istypeInput={"number"}
            isnameInputStrength={'wineStrength'}
            isnameInputVolume={'volume'}
            isnameInputInitialSugar={'initialSugar'}
            isclassInput= {'input'}
            // isvalueStrenght= {K}
            // isvalueVolum= {V}
            // isvalueInitialSugar= {C}
            // onChangeStrength = {hendleInputStrength}
            // onChange = {hendleInputVolume}
            // onChangeInitialSugar = {hendleInputInitialSugar}
            isplaceholderInput = {0}
            // onClick = {hendleDataBtnClick} 
            
                                               
            />
        
      </div>

  
  );
}

export default CalcBox;