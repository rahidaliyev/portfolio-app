import React from 'react'
import {Box,Button} from '@chakra-ui/react'
import { extendTheme,Flex } from '@chakra-ui/react'
import {Divider,Image} from '@chakra-ui/react'
const theme = extendTheme({
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
  })

export default function Main() {
  return (
    <div>
        <Box>
        <Flex alignItems='center'>
<Box mt={'110px'}>

  
        <Box ml={'230px'} lineHeight={'28px'} theme={theme}   fontSize={'20px'} color={'#4338CA'}>Rahid Aliyev</Box>

      
        <Box  color={'white'} lineHeight={'72px'} fontWeight={700} fontSize={'72px'} mt={'40px'} ml={"130px"} bg={'blue.400'} h={'144px'} w={'596px'} fontFamily={'inter'}>
        Creative thinker Minimalism lover
                          </Box>
                          <Box theme={theme} w={'553px'} h={'84px'} ml={'130px'} mt={'40px'}>
                          Hi, I’m Rahid. I’m Front End Developer. If you are looking for Dev to build your websites and grow your business Let’s shake hands with me.
                          </Box>
                          <Flex ml={'130px'}>
                            <Button colorScheme={'facebook'} size={'lg'} mr={'20px'}>Hire me</Button>
                            <Button bg={'pink'} color={'pink.600'} size={'lg'}>Read more</Button>
                          </Flex>
                          <Divider mt={'20px'} ml={'130px'} w={'622px'} />
                          <Box mt={'20px'} ml={'130px'}>I am currently open for full-time work.</Box>
                          </Box>

                          <Box ml={'80px'}  mt={'86px'} boxSize='sm'>
  <Image borderRadius={'6px'} boxSize='450px'
    objectFit='cover' src={require("../../photos/RahidCover.JPG")} alt='Rahid Aliyev' />
</Box>
                          </Flex>
                          </Box>
    </div>
  )
}
