import { extendTheme, Text, Box, Center, Stack, Link } from '@chakra-ui/react'
import React from 'react'
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})



export default function Footer() {
  return (
    <div>

      <Box  theme={theme} pt={'30px'} mt={'150px'} bg={'#FEF2F2'} h={'380px'} w={'100%'} >


        <Text textAlign={'center'} fontSize='5xl'>Contact with me</Text>

        <Text pt={'10px'} textAlign={'center'}>I’m not currently taking on new client work but feel free to contact me for any other inquiries.</Text>
        <Center mt={'100px'}>
          <Stack direction={['column', 'row']} spacing='40px'>
            <Link href='https://github.com/rahidaliyev' target="_blank"  _hover={{ color: "gray.500" }}><BsGithub size={50} /></Link>
            <Link href='https://www.linkedin.com/in/rahid-aliyev-5a9665196/' target="_blank"  _hover={{ color: "#0e76a8"}}><FaLinkedin size={50} /></Link>
            <Link href="mailto: rahidaliyev18@gmail.com" target="_blank"  _hover={{ color: "red.500"}}><SiGmail size={50} /></Link>
            <Link href='https://twitter.com/rahidaliyev18' target="_blank"  _hover={{ color: "#00acee"}}><FiTwitter size={50} /></Link>
            <Link href='https://www.facebook.com/rahid.aliyev.7' target="_blank"  _hover={{ color: "#4267B2"}}><FiFacebook size={50} /></Link>
            <Link href='https://www.instagram.com/rahidaliyev/?hl=en' target="_blank"  _hover={{ color: "#fb3958"}}><FiInstagram size={50} /></Link>



          </Stack>


        </Center>
        <Box textAlign={'center '} pt={'50px'}>

          <Text> © All Rights Reserved.2022</Text>
        </Box>
      </Box>

    </div>
  )
}
