import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import { Flex, Box, FormControl, FormLabel, Input, Stack, Heading, Button, Text, useColorModeValue } from "@chakra-ui/react"

//Login
class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/works`)
    }

    return (
      <Flex
        minH={'calc(100vh - 60px)'}
        align={'center'}
        justify={'center'}
        bg={'grayPrimary'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Box
            round={'lg'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <Heading as='h2' fontSize={'4xl'}>Log in</Heading>
            <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(event)
                navigate(`/app/works`)
              }}
            >
              <FormControl id="username">
                <FormLabel m={0} mb={4}>
                  Username
                  <Input
                    focusBorderColor="primary.500"
                    type="text"
                    name="username"
                    onChange={this.handleUpdate}
                    />
                </FormLabel>
              </FormControl>
              <FormControl id="password">
                <FormLabel m={0} mb={8}>
                  Password
                  <Input
                    focusBorderColor="primary.500"
                    type="password"
                    name="password"
                    onChange={this.handleUpdate}
                  />
                </FormLabel>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  </Stack>
              </Stack>
              <Button
                type="password"
                onChange={this.handleUpdate}
                width={'100%'}
                mt={4}
                bg={'pink.500'}
                size={'lg'}
                color={'white'}
                _hover={{
                  bg: 'pink.300'
                }}>
                  Sign in
                </Button>
            </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }
}

export default Login
