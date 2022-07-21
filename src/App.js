import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import DefaultPage from './components/DefaultPage';
import HireMe from './components/HireMe/HireMe';


function App() {
  return (
<>
<Routes>
<Route path='/' element={<DefaultPage/>} />
<Route path='hire' element={

<HireMe/>


} />
</Routes>
</>
  );
}

export default App;
