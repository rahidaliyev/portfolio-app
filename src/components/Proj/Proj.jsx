import React from 'react'
import {Center,Box,Text} from '@chakra-ui/react'
import {extendTheme} from '@chakra-ui/react'

const myTheme = extendTheme({
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
  })

export default function Proj() {
  return (
    <div>
        <Center>
            <Box mt={'198px'} w={'1039px'} h={'144px'}>
                <Text theme={myTheme} fontWeight={'600'} textAlign={'center'} fontSize={'48px'}>
            From beginning ideas to individual integrity,
             rich identity from the line on the paper to final projects.
             </Text>
            </Box>
        </Center>
    </div>
  )
}
