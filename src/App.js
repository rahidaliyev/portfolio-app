import React, { useState,useEffect } from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import DefaultPage from './components/DefaultPage';
import HireMe from './components/HireMe/HireMe';
import RingLoader from "react-spinners/RingLoader";
import { Box } from '@chakra-ui/react';


function App() {
  const style={
    borderColor: "red",
    position:'absolute',
    left:'45%',
    top:'245px'

  }
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      },3000)
  },[])
  return (
<div>
{
   loading ?
   <div>
   <RingLoader
color="blue"
size={150}
loading={loading}
style={style}
/>
{/* <Box style={style}>Lütfən gözləyin....</Box> */}
</div>
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
