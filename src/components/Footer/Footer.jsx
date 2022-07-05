import {extendTheme, Text, Box,Center, Stack } from '@chakra-ui/react'
import React from 'react'
import {FiTwitter,FiFacebook,FiInstagram} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'



const theme = extendTheme({
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
  })


export default function Footer() {
  return (
    <div>
        
        <Box theme={theme} pt={'30px'}  mt={'150px'} bg={'#FEF2F2'} h={'380px'} w={'100%'} >


<Text  textAlign={'center'}  fontSize='5xl'>Contact with me</Text>

    <Text pt={'10px'}  textAlign={'center'}>I’m not currently taking on new client work but feel free to contact me for any other inquiries.</Text>
  <Center mt={'100px'}>
   <Stack direction={['column', 'row']} spacing='40px'>
  
     <BsGithub onMouseOver={({target})=>target.style.color="grey"}
    onMouseOut={({target})=>target.style.color="black"}  size={50}/>
  <FiTwitter onMouseOver={({target})=>target.style.color="blue"}
    onMouseOut={({target})=>target.style.color="black"} size={50}/>
  <FiFacebook onMouseOver={({target})=>target.style.color="blue"}
    onMouseOut={({target})=>target.style.color="black"} size={50}/>

<SiGmail onMouseOver={({target})=>target.style.color="red"}
    onMouseOut={({target})=>target.style.color="black"}  size={50}/>

 <FiInstagram onMouseOver={({target})=>target.style.color="blue"}
    onMouseOut={({target})=>target.style.color="black"} size={50}/>

<FaLinkedin onMouseOver={({target})=>target.style.color="blue"}
    onMouseOut={({target})=>target.style.color="black"}  size={50}/>

 </Stack>


  </Center>
  <Box textAlign={'center '}  pt={'50px'}>
 
<Text> © All Rights Reserved</Text>
</Box>
        </Box>
        
    </div>
  )
}
