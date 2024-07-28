import React from 'react'
import './CalcBox.css' 

import Form from '../Form/Form'
import Bgr from '../../assets/bg.png'



function CalcBox(props) {
  return (
  
      <div className='calc__box'>
        <h2 className='h2'>Введите исходные данные</h2>
        <Form 
            isClass= {'form__wrapper'}
            istypeInput={"number"}
            isvolueInitialSugar = {props.isvolueInitialSugar}
             isvolueVolum = {props.isvolueVolum}
             isvolueStrenght = {props.isvolueStrenght}
             onClick = {props.onclick}
             
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