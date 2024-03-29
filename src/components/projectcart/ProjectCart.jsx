import React from 'react'
import { Box, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
export default function ProjectCart(props) {
  return (
    <div>
        <Box m={'15px'}>
<LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
  <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
    13 days ago
  </Box>
  <Heading size='md' my='2'>
    <LinkOverlay href='https://client-tau-ecru.vercel.app/' target="_blank">
    {props.name}
    </LinkOverlay>
  </Heading>
  <Text>
    Catch up on what’s been cookin’ at Smashing and explore some of the most
    popular community resources.
  </Text>
</LinkBox>
</Box>

    </div>
  )
}
