import React from "react"
import { Link } from "gatsby"
import { isLoggedIn } from "../services/auth"
import Mv from "../components/Mv"
import IndexMessage from "../components/IndexMessage"
import ThisSite from "../components/ThisSite"
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
        <>
        <Box>
          {isLoggedIn() ? (
            <>
              <Link to="/app/works">ログインしています。worksより制作実績をご覧ください。</Link>
            </>
            ) : (
            <>
              <Link to="/app/login">worksよりログインすると制作実績をご覧頂けます。</Link>
          </>
          )}
        </Box>
        <Box>
          <Mv />
        </Box>
        </>
  )
}
