import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function HireMe() {
    const [name, setName] = useState('')
    const [mail,setMail]=useState('')

    const handleInputChange = (e) => setMail(e.target.value)
    const handleNameChange = (e) => setName(e.target.value)
  
    const isError = mail === ''
//textarea
    let [value, setValue] = React.useState('')

    let handleTextChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }



  return (
    <div>
        <Box alignSelf={'center'} border={'1px'} borderColor={'blue.200'} borderRadius={'10px'} h={'500px'} w={'400px'} m={'150px 0 0 36%'} p={'50px 0'} >
    
    <FormControl m={'30px 30px 0px 30px'} isInvalid={isError}>
      <FormLabel  htmlFor='text'>Company Name</FormLabel>
      <Input
        w={'300px'}
        id='name'
        type='name'
        value={name}
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
    <FormControl m={'0px 30px 0px 30px'} isInvalid={isError}>
      <FormLabel  htmlFor='email'>Email</FormLabel>
      <Input
        w={'300px'}
        id='email'
        type='email'
        value={mail}
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
    <Box  m={'30px 30px 0px 30px'} w={'300px'} mt={'10px'}>
    <Text mb='8px'>Send me message</Text>
      <Textarea resize={'none'}  bg={'blue.50'}
        value={value}
        onChange={handleTextChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
      </Box>
      <Button m={'30px 30px 0px 30px'} size='sm' mr={10} color={'white'} bg='blue.400'>Hire me</Button>
    </Box>
    </div>
  )
}
