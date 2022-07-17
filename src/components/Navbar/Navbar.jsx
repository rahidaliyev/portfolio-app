import React from 'react'
import { Button, Box,Text,Spacer,HStack} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import DarkMode from '../Darkmode';
import {Link} from 'react-router-dom'

function changeMouse(e) {
  e.target.style.cursor = 'pointer';
 }

export default function Navbar() {
  const [colorTheme,setTheme]=DarkMode();
  return (
    <div>
      <Box>
   <HStack  position={'fixed'} as={'nav'} width="100%" height={24} bg={'blue.700'} spacing={55}  >

             
                <Text  onClick={()=>setTheme(colorTheme)} ml={'30px'}>
                  {colorTheme==="light"  ?
                  ( <MoonIcon color={'black'}  w={10} h={10} />):
                 <SunIcon color={'yellow'}  w={10} h={10} />
                 }
                 
                  </Text>
                <Spacer />
               <Box>
                <Text color={'white'} onMouseOver={changeMouse} fontFamily={'revert'}  fontSize="2xl" fontWeight="bold">Services</Text>
                </Box>
                <Box>
                <Text color={'white'} onMouseOver={changeMouse} fontFamily={'revert'} fontSize="2xl" fontWeight="bold">Works</Text>
                </Box>
                <Box>
                <Text color={'white'} onMouseOver={changeMouse} fontFamily={'revert'} fontSize="2xl" fontWeight="bold">Blog</Text>
                </Box>

                <Box >
               <Link to='/hire'> <Text  fontFamily={'revert'} fontSize="2xl" fontWeight="bold"><Button size='lg' mr={10} bg='#00AEAC'>Hire me</Button></Text></Link>
                </Box>
              
                </HStack> 
                </Box>
    </div>
  )
}
