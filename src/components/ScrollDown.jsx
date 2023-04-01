import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const ScrollDown = () => {
  return(
    <Span
        animate={{
        opacity: 1}}
        transition={{
        duration: 2,
        times: [0,0.2,0.5,0.8,1],
        repeat: Infinity,
      }}>
      Scroll
      <Border
        animate ={{
          width: '160px',
          opacity: 1
        }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'linear'
        }}/>
    </Span>
  )
}


const Span = styled(motion.span)`
  position: fixed;
  top: 90%;
  right: 0;
  display: block;
  transform: rotate(90deg);
  width: 160px;
  z-index: 999999;
  letter-spacing: .1em;
  opacity: 0;
`

const Border = styled(motion.span)`
  display: block;
  width: 0;
  height: 1px;
  background: #222;
  opacity: 0;
`

export default ScrollDown
