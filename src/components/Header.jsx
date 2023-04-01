import React from "react"
import HeaderBtn from "./HeaderButton.jsx"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import {
  Heading,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure
  } from "@chakra-ui/react"

  import {
    HamburgerIcon,
    CloseIcon
  } from "@chakra-ui/icons";



export default function Header() {

  const { isOpen,onToggle } = useDisclosure();

  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = "ログインしています"
  } else {
    greetingMessage = "ログインしていません"
  }


  return (
    <Flex as='header'
        bg={useColorModeValue('white','gray.800')}
        color={useColorModeValue('gray.600',' white')}
        minH={'80px'}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200','gray.900')}
        align={'center'}
        justifyContent={'space-between'}
        >
        <Flex
          align={'center'}
          justifyContent={'space-between'}
          >
          <Heading as={'h1'}
            fontSize={'32px'}
            fontWeight={'bold'}
            pl={'4'}
          >
            <Link to="/">MEE.</Link>
          </Heading>
            <Link to="/skill">skill</Link>
        </Flex>
      <Flex
        as={'nav'}
        align={'center'}
        fontWeight={'bold'}
        justifyContent={'space-between'}>
        <Link to={'https://github.com/ma-kotou'}><AiFillGithub color={'blackPrimary'} fontSize={'32px'} /></Link>
        <HeaderBtn
          bg={'blackPrimary'}
          href={'/app/works'}
          text='Works'
          ml={'4'}
          />
        {isLoggedIn() ? (
          <HeaderBtn
            variant={'link'}
            href={'/'}
            bg={'primary.500'}
            text='LogOut'
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}>
          </HeaderBtn>
        ) : null}
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              />
        </Flex>
      </Flex>
      </Flex>
  )
}
