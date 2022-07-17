import { HStack } from '@chakra-ui/react'
import React from 'react'
import AllAbilities from './AllAbilities/AllAbilities'
import Footer from './Footer/Footer'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import Proj from './Proj/Proj'

export default function DefaultPage() {
  return (
    <div>
 
<Navbar/>
<Main/>
<Proj/>
<AllAbilities/>
<Footer/>


    </div>
  )
}
