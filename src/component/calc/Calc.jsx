import React from 'react'
import './Calc.css' 


import Bgr from '../../assets/bg.png'
import CalcBox from '../calcBox/CalcBox';
import CalcNote from '../calcNote/calcNote';
import CalcResult from '../calcResult/calcResult';
import CalcResultJuice from '../calcResultJuice/calcResultJuice';
import СalcResultNote from '../calcResultNote/calcResultNote'



function Calc() {
  return (
    <>
    <div className='container'>
      <div className="calc">
        <img className='bgimage' src={Bgr} alt="" />
        <h1 className='h1'>Калькулятор загрузки компонентов фруктовой браги</h1>
        <h3 className='h3'>Калькулятор поможет рассчитать оптимальные пропорции сырья, воды и сахара при заданном объеме браги, желаемой крепости браги и сахаристости фруктов (ягод)</h3>
    
        <p className='p'>Подробно о том, как подготовить сырье, какие взять дрожжи, как определить сахаристость сырья читайте в моем авторском курсе "Фрутовый самогон. Вкусно, просто и недорого" и ТГ канале "Моя домашняя винокурня" </p>
        <div className='calc__inner'>
          <div className="calc__wrapper">
            < CalcBox />
            < CalcNote />
          </div>
          <div className="calc__wrapper">
              < CalcResult />
              < CalcResultJuice />
              < СalcResultNote />
          </div>   
        </div>
       </div>
      </div>
      </>
  );
}

export default Calc;