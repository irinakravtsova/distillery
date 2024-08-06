import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



import Header from './component/Header/Header'
import Calc from './component/calc/Calc';
import AdvertisingBox from './component/AdvertisingBox/AdvertisingBox'
import CalcFruits from './component/calcFruits/calcFruits';

function App() {
 
  return (
    <>
    < Header />
    <CalcFruits />
    <Calc />
   
    < AdvertisingBox />
    </>
  )
}

export default App
