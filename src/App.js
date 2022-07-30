import React, { useState,useEffect } from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import DefaultPage from './components/DefaultPage';
import HireMe from './components/HireMe/HireMe';
import RingLoader from "react-spinners/RingLoader";
import { AbsoluteCenter } from '@chakra-ui/react';


function App() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      },8000)
  },[])
  return (
<div>
{
   loading ?
   <RingLoader
size={150}
loading={loading}
style={{color:'blue.700',position:'absolute',left:'45%',top:'245px'}}
/>
:
<div>
<Routes>
<Route path='/' element={<DefaultPage/>} />
<Route path='hire' element={<HireMe/>} />
</Routes>
</div>
}

</div>
  );
}

export default App;
