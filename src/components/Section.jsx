import React from "react"
import { Container } from "@chakra-ui/react"

const Section = (props) => {
  return (
    <Container
      as={'section'}
      mt={'104px'}
      maxWidth={'none'}
      {...props}
      >
        {props.children}
      </Container>
  )
}

export default Section
