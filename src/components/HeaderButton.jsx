import React from "react"
import { Button } from "@chakra-ui/react"

const HeaderBtn = (props) =>{
  return(
    <Button
      w={'132px'}
      h={'80px'}
      color={'#fff'}
      borderRadius={'0'}
      as={'a'}
      {...props}
    >{props.text}</Button>
  )
}

export default HeaderBtn
