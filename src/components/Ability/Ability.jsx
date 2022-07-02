import React from 'react'
import { Box,Heading,Text,Link} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Ability() {
    return (
        <div>
            <Box border={'1px black solid'} w={'311px'} h={'162px'}>
                <Heading>
                    Web design
                </Heading>
                <Text>
                    Provide our customers with optimized
                     user-friendly experience to increase the
                      efficiency of digital products.
                </Text>
                <Link href='https://chakra-ui.com' isExternal>
  Chakra Design system <ExternalLinkIcon mx='2px' />
</Link>
            </Box>


        </div>
    )
}
