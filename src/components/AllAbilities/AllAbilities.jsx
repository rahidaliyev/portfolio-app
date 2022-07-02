import { Box, Center, Divider, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Ability from '../Ability/Ability'

export default function AllAbilities() {
  return (
    <div>
  <Center>
        <Flex >
            <Image src={require('../../photos/image 11.png')}></Image>
        <Box h={'532px'} w={'690px'} mt={'100px'}>
        <Flex wrap={'wrap'}>
        <Divider orientation='vertical' />
        <Ability/>
        <Ability/>
        <Ability/>
        <Ability/>

        <Ability/>
        </Flex>
        </Box>
        </Flex>
        </Center>
    </div>
  )
}
