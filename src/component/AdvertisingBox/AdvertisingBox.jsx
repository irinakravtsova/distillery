import React from 'react'
import './AdvertisingBox.css' 
import BgrBox from '../../assets/bgBox.jpg'


function AdvertisingBox() {
  return (
    <div className='advertising-box'>
     
       
          <ul className="box-wrapper">
           <li className='h2 box-title'>
             Народ! Делайте бухло сами!
           </li>
           <li className='box-text detailed detailed-title'>
             - это 100% уверенность, что не паленка; 
           </li>
           <li className='box-text detailed detailed-title'>
               - это невероятная экономия денег;
           </li>
           <li className='box-text detailed detailed-title'>
               - это респект и уважение всех друзей и родни!
           </li>
           <li className='box-text detailed '>
              Оставим с носом производителей, поставщиков и тех, кто собирает акциз!
           </li>
           {/* <li className='box-text detailed'>
           Потратив 200-300 рублей и немного времени вы получаете 5 литров чистейшего дистиллята, который прекрасен сам по себе тем, что сохраняет ароматы фруктов, из которых вы его сделали.
           </li> */}
           <li className='box-text detailed detailed-title'>
               Потратив 200-300 рублей
           </li>
           <li className='box-text detailed'>
              и немного времени вы получаете
           </li>
           <li className='box-text detailed detailed-title'>
             5 литров чистейшего дистиллята, 
           </li>
           <li className='box-text detailed'>
             который прекрасен сам по себе тем, что сохраняет ароматы фруктов, из которых вы его сделали.
           </li>
           <li className='box-text detailed'> 
              А если потерпите год-другой, то получите божественный напиток, сопоставимый 
           </li>
           <li className='box-text detailed detailed-title'> 
               с элитными сортами дорогого алкоголя.
          </li>
           <li className='box-text detailed'>
               Имея за плечами почти 10-ти летний опыт изготовления крепких напитков в домашних условиях и будучи профессиональным технологом,           
           </li>
           <li className='box-text detailed detailed-title'>
               я выработала свой метод, 
           </li>
           <li className='box-text detailed detailed-title'>
               сделала его простым и повторяемым
           </li>
           <li className='box-text detailed'>
               и с удовольствием делюсь им
           </li>
           
           <li className='box-text detailed detailed-title'>
              на ТГ канале 
             <a href="https://t.me/distillery_Irina"
                target='_blank'>"Моя домашняя винокурня"</a> 
           </li>
           <li className='box-title box-subtitle'>
         
           </li>
           <li className='box-text detailed detailed-title '> 
            <a href="https://t.me/course_distillery_bot"
                target='_blank'>в своем авторском курсе 
              "Самогон из фруктов (домашний кальвадос)" </a>
           </li>
       
          </ul>
        
      </div>
      
    
  );
}

export default AdvertisingBox;