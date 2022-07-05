import { Box, Center, Divider, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Ability from '../Ability/Ability'


export default function AllAbilities() {
  return (
    <div>
  <Center mt={'100px'}>
        <Flex >
            <Image src={require('../../photos/image 11.png')}></Image>
        <Box ml={'100px'} h={'532px'} w={'690px'} mt={'100px'}>
        <Flex  wrap={'wrap'}>
        <Divider orientation='vertical' />
        <Ability 
         name='Web design'
         text='Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.' 
        />
        <Ability
        name='Mobile design'
        text='Mobile application development is a highlight that businesses are interested in at the moment and in the future.'/>
        <Ability
        name='Branding'
        text='Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.'/>
        <Ability
        name='Photography'
        text='While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully.'/>

        <Ability
        name='3D Modeling'
        text='Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art'/>
        </Flex>
        </Box>
        </Flex>
        </Center>
    </div>
  )
}
