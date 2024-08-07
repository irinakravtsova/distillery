import React from 'react'
import './AdvertisingBox.css' 
import BgrBox from '../../assets/bgBox.jpg'


function AdvertisingBox() {
  return (
    <div className='advertising-box'>
     
       
          <ul className="box-wrapper">
           <li className='h2 box-title'>
           Попробовав однажды, вы уже никогда не будете покупать крепкий алкоголь в магазинах 
           </li>
           <li className='box-title box-subtitle'>
            (так говорят все, кому посчастливилось отведать мой божественный бренди) 
           </li>
           <li className='box-text'>
           Если вы действительно готовы сделать своими руками элитный фруктовый бренди, который удивит игрой нот и богатым вкусом, вам необходимо учесть кое-какие нюансы.
           </li>
           <li className='box-text detailed detailed-title'>
           Подробно о том:
           </li>
           <li className='box-text detailed'>
           - как подготовить фрукты (ягоды) и зачем тратить время на приготовление инвертного сиропа;
           </li>
           <li className='box-text detailed'>
           - как правильно провести процесс брожения;
           </li>
           <li className='box-text detailed'>
           - как перегнать готовую фруктовую брагу так, чтобы на выходе получить чистейший от вредных примесей дистиллят и в то же время сохранить аромат и вкус исходых фруктов;
           </li>
           <li className='box-text detailed'>
           - и наконец зачем нужна выдержка, ведь хороший фруктовый дистиллят прекрасен и сам по себе, но после выдержки в бочонке или на щепе, становится божественным крепким напитком, не дистиллятом, но благородным бренди, не сравнимым с теми, которые продают в наших магазинах. 
           </li>
           <li className='box-text subtext '>
           Обо всем этом и много другом, очень важном, читайте 
           </li>
           <li className='box-text subtext '>
              на ТГ канале 
             <a href="https://t.me/distillery_Irina"
                target='_blank'>"Моя домашняя винокурня"</a> 
           </li>
           <li className='box-title box-subtitle'>
           Почти 10-ти летний опыт и собираемая по крупицам информация, которую я опробовала, проанализовала, и подготовила для вас в очень удобном виде. 
           </li>
           <li className='box-text subtext '> 
            <a href="https://t.me/course_distillery_bot"
                target='_blank'>в моем авторском курсе 
            "Фруктовый самогон. Вкусно, просто и недорого" </a>
           </li>
       
          </ul>
        
      </div>
      
    
  );
}

export default AdvertisingBox;