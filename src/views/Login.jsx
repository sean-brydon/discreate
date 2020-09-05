import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Heading,
  Button,
  Text,
} from '@chakra-ui/core'
import ThemeToggler from '../components/ThemeToggler'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  return (
    <div>
      <ThemeToggler />
      <Flex width="full" align="center" justifyContent="center">
        <Box
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                {/* Sets the value of "email" on change of the input*/}
                <Input
                  type="email"
                  placeholder="test@test.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={3} isRequired>
                <FormLabel>Password</FormLabel>
                {/* Sets the value of "password" on change of the input*/}
                <Input
                  type="password"
                  placeholder="*******"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                width="full"
                mt={4}
                variant="outline"
                variantColor="teal"
                onClick={() => console.log(email, password)}
              >
                Sign In
              </Button>
              <Text mt={4}>
                Don't have an account? <Link to="/Register">Sign Up</Link>
              </Text>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Login
