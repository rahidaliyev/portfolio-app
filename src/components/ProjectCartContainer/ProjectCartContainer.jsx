import { Box, Center, extendTheme, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCart from '../projectcart/ProjectCart'


const myTheme = extendTheme({
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
  })
export default function ProjectCartContainer(props) {
  return (
    <div>
        <Center>
            <Box mt={'198px'} w={'1039px'} h={'144px'}>
                <Text theme={myTheme} fontWeight={'600'} textAlign={'center'} fontSize={'48px'}>
            Here you can see my projects
             </Text>
            </Box>
        </Center>
     <Box position={'relative'} left={'10%'} top={'10px'}>
        <Flex wrap={'wrap'}>
<ProjectCart name='Keetapp'/>
<ProjectCart name='Currenct Converter'/>
<ProjectCart name='ToDo List'/>

</Flex>
</Box>


    </div>
  )
}
