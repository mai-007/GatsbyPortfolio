
import React from 'react'
import ThemeProvider from './@chakra-ui/gatsby-plugin/Provider'
import Layout from './components/Layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider element={element} />
}
