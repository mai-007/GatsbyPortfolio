// src/@chakra-ui/gatsby-plugin/Provider.js

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from './theme'

const ThemeProvider = (props) => {
  return (
    <ChakraProvider
      theme={theme}
      resetCSS={props.resetCSS || true}
      portalZIndex={props.portalZIndex || 40}
    >
      {props.element}
    </ChakraProvider>
  )
}

export default ThemeProvider
