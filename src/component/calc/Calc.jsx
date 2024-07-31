import React from 'react'
import { useState } from 'react'
import './Calc.css' 

import Bgr from '../../assets/bg.png'
import CalcBox from '../calcBox/CalcBox';
import CalcNote from '../calcNote/calcNote';
import CalcResult from '../calcResult/calcResult';
import CalcResultJuice from '../calcResultJuice/calcResultJuice';
import СalcResultNote from '../calcResultNote/calcResultNote'


function Calc(props) {
  const [initialSugar, setInitialSugar] = useState('');
  const [volume, setVolume] = useState('');
  const [strenght, setStrenght] = useState('');
 
  const C = Number(initialSugar);
  const V = Number(volume);
  const K = Number(strenght);
 
  const [S, setS] = useState(0);
  const [W, setW] = useState(0);
  const [F, setF] = useState(0);
  const [Q, setQ] = useState(0);

  const [J, setJ] = useState(0);//количество сока
  const [QJ, setQJ] = useState(0);//всего на соке
  const [WJ, setWJ] = useState(0);

  const [WS, setWS] = useState(0);

  
function formValidate() {
  let error = 0;
  if (!volume || !volume ) {
    error++;
    alert('объем готовой к перегонке браги не может быть равным 0 или меньше, введите любое положительное число' );
  
  } else
  if (!strenght || !strenght && strenght >18 && strenght <6 ) {
    error++;
    alert('желаемая крепость браги зависит от применяемых дрожжей, посмотрите на пачке рекомендации производител и введите указанное в качестве спиртоустойчивости количество градусов. Это может быть число от 6 до 18' );
  
  } else
  if (strenght >19 ) {
    error++;
    alert('вы уверены, что ваши дрожжи способны набродить такое количество спирта? обычно спиртоустойчивость дрожжей лежит в пределах от 12 до 18%. Уточните этот параметр у производителя');  
  }
  else
  if (strenght <8 ) {
    error++;
    alert('вы уверены, что вам необъходимо такое слабое сусло? Скорее всего ваши дрожжи способны набродить и большее количество спирта. Уточните этот параметр у производителя (как правило, он лежит в пределах от 12 до 18%');  
  }
   else
  if (initialSugar < 0  ) {
    error++;
    alert('количество сахара во фруктах не может быть отрицательным, введите значение от 0 до 20');
  }else
  if (initialSugar >20  ) {
    error++;
    alert(' у вас точно такое большое количество сахара во фруктах? обычно оно не превышает 20%, введите значение от 0 до 20');
  }
  return error;
} 
  
  function hendleClick(e) {
   e.preventDefault();
   let error = formValidate()
   if (error !== 0) {
     return     
   }

   let a = K/0.6*10; //приводим крепость к сахару
   let s = ((((a/(1000-a))*1000 - C/2*10)/1000*V).toFixed(1));
   let b = V*1.03//сусло с осадком
   let d = b-s*1.4//сусло с осадком без учета сахара
   let j = d/2 //фрукты без учета мезги
   let h = j*1.3 //фрукты с мезгой
   let q = (j+h)/2;   
   let f = q.toFixed(1);
  
   let g = q+(s*0.4);   
   let w = g.toFixed(1)
   let t = (g+q+s*1).toFixed(1) //всего на фруктах
   
   let jj = j.toFixed(1);  
   let wj = (jj*1 + s*0.4).toFixed(1);
   let tj = (j*1 + wj*1 + s*1).toFixed(1);

   let ws = (s*0.4).toFixed(1)

   setS (s);  
   setF (f);
   setW (w);
   setQ(t);

   setJ(jj);
   setQJ(tj);
   setWJ(wj);
   
   setWS(ws)
  }
 
  return (
    <>
    <div className='container'>
      <div className="calc">
        <img className='bgimage' src={Bgr} alt="" />
       
        <h2 className='h1'>Калькулятор загрузки компонентов фруктовой браги</h2>
        <div className='calc-subtitle'>
        <h3 className='h3'>Калькулятор поможет рассчитать оптимальные пропорции сырья, воды и сахара при заданном объеме браги, желаемой крепости браги и сахаристости фруктов (ягод)</h3>
        <div className='p'>Подробно о том, как подготовить сырье, какие взять дрожжи, как определить сахаристость сырья читайте в моем авторском курсе "Фрутовый самогон. Вкусно, просто и недорого" и ТГ канале "Моя домашняя винокурня" </div>
        </div>
        <div className='calc__inner'>
          <div className="calc__wrapper">
             <div className='calc__box'>
               <h2 className='h2'>Введите исходные данные</h2>
               <form action=""
               className='form__wrapper'               
               >
                 <div className='data'>
                  <p className='label'>
                  Объем готовой к перегонке браги</p> 
                  <input
                  value= {volume}
                  className='input' 
                  type="number"
                  placeholder='0'
                  onChange={e => setVolume(e.target.value)}
                  /> л.
                  </div>
                
                  <div className='data'>
                <p className='label' >Желаемая крепость браги </p>
                  <input 
                  className='input' 
                  type="number" 
                  placeholder='0'
                  value= {strenght}
                  onChange={e => setStrenght(e.target.value)}/> %
                  </div>
                  <div className='data'>
                   <p className='label'>
                  Количество сахара во фруктах (ягодах)  </p>
                  <input 
                  className='input' 
                  type="number" 
                  placeholder='0'
                  value= {initialSugar}
                  onChange={e => setInitialSugar(e.target.value)}/> %
                  </div>
                  
                <button className='btn'
                onClick={hendleClick}
                >Посчитать              
                </button>
               
                        </form>  
            <div className='down'> 
              <a className='result-txt' href="#result">Результат смотри ниже &#10549;</a>
              </div>     
      </div>
            < CalcNote />
          </div>
          <div className="calc__wrapper">
          
              < CalcResult
               W = {W}
               S = {S}
               F = {F}
               Q = {Q}
                />
              < CalcResultJuice
              WJ = {WJ}
              J =  {J}
              QJ = {QJ}
              S = {S}
               />
              < СalcResultNote
              WS = {WS} />
          </div>   
        </div>
       </div>
      </div>
      </>
  );
}

export default Calc;