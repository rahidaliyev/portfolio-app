import React from 'react'
import { Box,Heading,Text,Link} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Ability(props) {
    return (
        <div>
            <Box w={'311px'} h={'162px'}>
                <Heading fontSize={'18px'}>
                    {props.name}
                </Heading>
                <Text fontSize={'12px'}>
                  {props.text}
                </Text>
                <Link  href='https://chakra-ui.com' isExternal>
  See Works<ExternalLinkIcon mx='2px' />
</Link>
            </Box>


        </div>
    )
}
