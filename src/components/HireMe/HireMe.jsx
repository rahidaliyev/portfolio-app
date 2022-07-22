import { Box, Button,FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function HireMe() {
  const photo='https://meet.jobs/static/media/index-4.0fce7b16.svg'
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

    const style={
      width: '100%',
      height:'100%',
      overFlow:'hidden',
     
      
    }
//image not in position

  return (
    <div>
    <Box  style={style} h={'100%'} display={'flex'} flexDirection={'row'}>
      <Image height={'800px'} width={'800px'} src={photo}></Image>

        <Box  border={'1px'} borderColor={'blue.200'} borderRadius={'10px'} h={'500px'} w={'400px'} m={'auto'}  p={'50px 0'} >
       

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
        placeholder="Write your company's expectation"
        size='sm'
      />
      </Box>
      <Button m={'30px 30px 0px 30px'} size='sm' mr={10} color={'white'} bg='blue.400'>Hire me</Button>
    </Box>
    </Box> 
    </div>
  )
}
