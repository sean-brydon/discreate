import React from 'react'
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

const Register = () => {
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
            <Heading>Register</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={3} isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="*******" />
              </FormControl>
              <Button
                width="full"
                mt={4}
                type="submit"
                variant="outline"
                variantColor="teal"
              >
                Sign Up
              </Button>
              <Text mt={4}>
                Already have an account? <Link to="/Login">Sign In</Link>
              </Text>
            </form>
          </Box>
        </Box>
      </Flex>
      <Flex justifyContent="end"></Flex>
    </div>
  )
}

export default Register
