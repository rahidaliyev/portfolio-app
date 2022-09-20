import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { extendTheme, Flex } from '@chakra-ui/react'
import { Divider, Image, Center, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})

const myPhoto = 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'


export default function Main() {
 
  return (
    <div>
      <Container>
        <Center>
          <Flex>
            <Box mt={'206px'}>


              <Box ml={'50px'} mb={'-20px'} lineHeight={'28px'} theme={theme} fontSize={'20px'} color={'#4338CA'}>Rahid Aliyev</Box>


              <Box color={'white'} lineHeight={'72px'} fontWeight={700} fontSize={'72px'} mt={'40px'} bg={'blue.400'} h={'144px'} w={'596px'} fontFamily={'inter'}>
                Creative thinker Minimalism lover
              </Box>
              <Box theme={theme} w={'553px'} h={'84px'} mt={'40px'}>
                Hi, I’m Rahid. I’m Front End Developer. If you are looking for Dev to build your websites and grow your business Let’s shake hands with me.
              </Box>
              <Flex>
                <Link to='/hire'><Button position={'inherit'} zIndex={'-1px'} colorScheme={'facebook'} size={'lg'} mr={'20px'}>Hire me</Button></Link>
                <Button position={'inherit'} bg={'pink'} color={'pink.600'} size={'lg'}>Read more</Button>
              </Flex>
              <Divider position={'inherit'} mt={'20px'} w={'622px'} />
              <Box mt={'20px'}>I am currently open for full-time work.</Box>
            </Box>

            <Box ml={'80px'} mt={'206px'} boxSize='sm'>
              {/* <Image borderRadius={'6px'} boxSize='450px'
    objectFit='cover' src={require("../../photos/RahidCover.JPG")} alt='Rahid Aliyev' /> */}
              <Image borderRadius={'6px'} boxSize='450px'
                objectFit='cover' src={myPhoto} alt='Rahid Aliyev' />
            </Box>
          </Flex>
        </Center>

      </Container>
    </div>
  )
}
