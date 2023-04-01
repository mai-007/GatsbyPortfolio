import React from "react"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"

// gatsby-browser.js
import { wrapPageElement as wrap } from './src/wrapper'

const cache = createCache({ key: "css", prepend: true })



export const wrapPageElement = wrap

export const wrapRootElement = ({ element }) => {
  return <CacheProvider value={cache}>{element}</CacheProvider>
}
