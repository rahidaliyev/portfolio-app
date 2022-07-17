import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function HireMe() {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)
    const handleNameChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  return (
    <div>
        <Box m={'150px 0 0 36%'} p={'50px 0'} >
    
    <FormControl isInvalid={isError}>
      <FormLabel  htmlFor='text'>Name</FormLabel>
      <Input
        w={'300px'}
        id='name'
        type='name'
        value={input}
        onChange={handleNameChange}
      />
      {!isError ? (
        <FormHelperText>
          Please write your name
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={isError}>
      <FormLabel  htmlFor='email'>Email</FormLabel>
      <Input
        w={'300px'}
        id='email'
        type='email'
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    </Box>
    </div>
  )
}
