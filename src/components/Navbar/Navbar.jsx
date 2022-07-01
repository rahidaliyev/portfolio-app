import React from 'react'
import { Button, Box,Text,Spacer,HStack} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import DarkMode from '../Darkmode';


export default function Navbar() {
  const [colorTheme,setTheme]=DarkMode();
  return (
    <div>
   <HStack width="100%" height={24} bg={'red.400'} spacing={55}  >

             
                <Text  onClick={()=>setTheme(colorTheme)} ml={'30px'}>
                  {colorTheme==="light"  ?
                  ( <MoonIcon color={'black'}  w={10} h={10} />):
                 <SunIcon color={'yellow'}  w={10} h={10} />
                 }
                 
                  </Text>
                <Spacer />
               <Box>
                <Text fontFamily={'revert'}  fontSize="2xl" fontWeight="bold">Services</Text>
                </Box>
                <Box>
                <Text fontFamily={'revert'} fontSize="2xl" fontWeight="bold">Works</Text>
                </Box>
                <Box>
                <Text fontFamily={'revert'} fontSize="2xl" fontWeight="bold">Blog</Text>
                </Box>
                <Box >
                <Text fontFamily={'revert'} fontSize="2xl" fontWeight="bold"><Button size='lg' mr={10} bg='#00AEAC'>Hire me</Button></Text>
                </Box>
              
                </HStack> 
         
    </div>
  )
}
