import React from 'react'
import { useState } from 'react'
import './calcFruits.css' 

import Bgr from '../../assets/bg.png'
import CalcBox from '../calcBox/CalcBox';
import CalcNote from '../calcNote/calcNote';
import CalcResult from '../calcResult/calcResult';
import CalcResultJuice from '../calcResultJuice/calcResultJuice';
import СalcResultNote from '../calcResultNote/calcResultNote'
import CalcResultFruits from '../calcResultFruits/calcResultFruits';


function CalcFruits(props) {
  const [initialSugar, setInitialSugar] = useState('');
  const [volumeFruits, setVolumeFruits] = useState('');
  const [strenght, setStrenght] = useState('');
 
  const C = Number(initialSugar);
  const Vf = Number(volumeFruits);
  const K = Number(strenght);  
 
  const [S, setS] = useState(0);
  const [W, setW] = useState(0);
  const [Ws, setWS] = useState(0);//вода на сахар
  const [Q, setQ] = useState(0);

  const [QJ, setQJ] = useState(0);//всего на соке
  const [WJ, setWJ] = useState(0);

  // const [WS, setWS] = useState(0);

  
function formValidate() {
  let error = 0;
  if (!volumeFruits || !volumeFruits ) {
    error++;
    alert('объем измельченных фруктов или сока не может быть равным 0 или меньше, введите любое положительное число' );
  
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
  if (initialSugar >30  ) {
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

   let a = (K/0.6*10).toFixed(1); //приводим крепость к сахару
   
   let b = (Vf*0.3).toFixed(1)//мезга
  
   let wc = Vf //вода на сок
 
   let d = Vf-b //сок без мезги
  
   let V = wc+d //вода+сок
   let s = ((((a/(1000-a))*1000 - C/2*10)/1000*V).toFixed(1)); //сахара на весь объем
   let ws = (s*0.4)// вода на сироп
   let wt = (wc+ws) //всего вода
   let t = (Vf+wt+s*1).toFixed(1) //всего на фруктах

   const wj = Vf+s*0.4
   const qj = (Vf*2 + s*1.4)

   
   console.log(qj);


   
   let j = d/2 //фрукты без учета мезги
   let h = j*1.3 //фрукты с мезгой
   let q = (j+h)/2;   
   let f = q.toFixed(1);
  
   let g = q+(s*0.4);   
   let w = g.toFixed(1)
  //  let t = (g+q+s*1).toFixed(1) //всего на фруктах
   
 
   let tj = (j*1 + wj*1 + s*1).toFixed(1);

   

   setS (s);  
   setWS(ws)
   setW (wt);
   setQ(t);

 
   setQJ(tj);
   setWJ(wj);
   
   
  }
 
  return (
    <>
    <div className='container'>
      <div className="calc">
        <img className='bgimage' src={Bgr} alt="" />
        <div className='note'>
        <h2 className='note__text '>Вы найдете здесь два калькулятора и в зависимости от того, по какому параметру вы будете считать, воспользуйтесь первым или вторым. </h2>
        <h2 className='note__text'> Если вы набрали ведро или два фруктов и отжали сок или измельчили и хотите использовать весь объём, тогда воспользуйтесь калькулятором по объему измельченных фруктов или сока</h2>
        <h2 className='note__text'>а если вы пранируете делать только одну партию дистиллята, то вам удобнее будет расчитать загрузку по объёму вашего самогонного аппарата и тогда воспользуйтесь вторым калькулятором по объему готового к перегонке сусла </h2>

        </div>
       
        <h2 className='h1'>Калькулятор загрузки компонентов фруктовой браги по объему измельченных фруктов или сока </h2>
        <div className='calc-subtitle'>
        <h3 className='h3'>Калькулятор поможет рассчитать сколько нужно добавить воды и сахара при заданном количестве измельченных фруктов или сока, желаемой крепости браги и сахаристости фруктов</h3>
        <p className='label_result text__node'> желаемая крепость браги зависит от спиртоустойчивости дрожжей;  <br></br> количество сахара в фруктах измеряется с помощью приборов или берется по таблицам;
        </p>
      
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
                  Объем измельченных фруков/сока</p> 
                  <input
                  value= {volumeFruits}
                  className='input' 
                  type="number"
                  placeholder='0'
                  onChange={e => setVolumeFruits(e.target.value)}
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
            {/* < CalcNote /> */}
          </div>
          <div className="calc__wrapper">
          
              < CalcResultFruits
               W = {W}
               S = {S}
               Ws = {Ws}
               Q = {Q}
               WJ = {WJ}              
               QJ = {QJ}
                />
              {/* < CalcResultJuice
              WJ = {WJ}
              J =  {J}
              QJ = {QJ}
              S = {S}
               /> */}
              {/* < СalcResultNote
              WS = {WS} /> */}
          </div>   
        </div>
       </div>
      </div>
      </>
  );
}

export default CalcFruits;