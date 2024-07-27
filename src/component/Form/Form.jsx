import React from 'react'
import './Form.css'
import Input from '../Input/Input';

import Button from '../button/button';
// import InputErrorTitle from '../InputErrorTitle/InputErrorTitle';
// import InputErrorBody from '../InputErrorBody/InputErrorBody';




function Form({
                isClass, 
              
                onChange, 
                isplaceholderInput,
                isnameInputStrength,
                isnameInputVolume,
                isnameInputInitialSugar, 
                onChangeStrength, 
                isvalueStrenght,
                isvalueVolum,
                isvalueInitialSugar,             
             
                onClick,
                istypeInput,
               
                isclassInput,
                onChangeInitialSugar
                }) {

  return (
    <form action=""
        className={isClass}>
          <div className='data'>
            <p className='label' htmlFor="">Объем готового к перегонке сусла</p>
            <Input 
                istypeInput={istypeInput}
                isnameInput={isnameInputStrength}
                isclassInput= {isclassInput}
                isplaceholderInput={isplaceholderInput}
                isvalue={isvalueStrenght}
                onChange={onChangeStrength}/>
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
                istypeInput={istypeInput}
                isnameInput={isnameInputVolume}
                isclassInput= {isclassInput}
                isplaceholderInput={isplaceholderInput}
                isvalue={isvalueVolum}
                onChange={onChange}/>
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
                istypeInput={istypeInput}
                isnameInput={isnameInputInitialSugar}
                isclassInput= {isclassInput}
                isplaceholderInput={isplaceholderInput}
                isvalue={isvalueInitialSugar}
                onChange={onChangeInitialSugar}/>
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
                onClick={onClick} />
    
    </form> 
     
  );
}

export default Form;