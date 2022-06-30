import React from 'react'
import { Button, Box,Text,Spacer,Flex,HStack} from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'



export default function Navbar() {
  return (
    <div>
   <HStack width="100%" height={28} bg={'red.400'} spacing={55}  >

             
                <Text ml={'30px'}><MoonIcon color={'yellow'}  w={10} h={10} /></Text>
                <Spacer />
               <Box  w='150px' h='40px' >
                <Text fontSize="2xl" fontWeight="bold">Services</Text>
                </Box>
                <Box>
                <Text fontSize="2xl" fontWeight="bold">Works</Text>
                </Box>
                <Box>
                <Text fontSize="2xl" fontWeight="bold">Blog</Text>
                </Box>
                <Box >
                <Text fontSize="2xl" fontWeight="bold"><Button size='lg' mr={10} bg='#00AEAC'>Hire me</Button></Text>
                </Box>
              
                </HStack> 
         
    </div>
  )
}
