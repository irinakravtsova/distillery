import React from 'react'
import './Form.css'
import Input from '../Input/Input';

import Button from '../button/button';
// import InputErrorTitle from '../InputErrorTitle/InputErrorTitle';
// import InputErrorBody from '../InputErrorBody/InputErrorBody';




function Form(props) {


  return (
    <form action=""
        className={props.isClass}>
          <div className='data'>
            <p className='label' htmlFor="">Объем готового к перегонке сусла</p>
            <Input 
                istypeInput={props.istypeInput}
                isnameInput={props.isnameInputStrength}
                isclassInput= {props.isclassInput}
                isplaceholderInput={props.isplaceholderInput}
                isvolueVolum = {props.isvolueVolum}
                onChange={props.onChangeStrength}
                V={props.V}/>
              <i>литров</i>
            <div className='data-input'>
             
            </div>
         
             {/* <InputErrorTitle 
                len= {isvalue.length}
                text='Введите корректное значение'/> */}
          </div>

          <div className='data'>
            <p className='label' htmlFor="">Желаемая крепость сусла</p>
            <Input 
                istypeInput={props.istypeInput}
                isnameInput={props.isnameInputVolume}
                isclassInput= {props.isclassInput}
                isplaceholderInput={props.isplaceholderInput}
                isvolueStrenght = {props.isvolueStrenght}
                onChange={props.onChange}/>
              <i>% об.</i>
            <div className='data-input'>
              
            </div>
         
             {/* <InputErrorTitle 
                len= {isvalue.length}
                text='Введите корректное значение'/> */}
          </div>

          <div className='data'>
            <p className='label '>Количество сахара во фруктовом (ягодном) сырье</p>
            <Input 
                istypeInput={props.istypeInput}
                isnameInput={props.isnameInputInitialSugar}
                isclassInput= {props.isclassInput}
                isplaceholderInput={props.isplaceholderInput}
                isvolueInitialSugar = {props.isvolueInitialSugar}
                onChange={props.onChangeInitialSugar}/>
              <i>%</i>
            <div className='data-input'>
              
            </div>
         
             {/* <InputErrorTitle 
                len= {isvalue.length}
                text='Введите корректное значение'/> */}
          </div>

      <Button 
                text={'Посчитать'}
                isClass={'btn'}
                onClick={props.onClick} />
    
    </form> 
     
  );
}

export default Form;