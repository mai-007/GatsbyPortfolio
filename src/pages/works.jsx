import React from 'react'
import Website from "../components/Website"
import Seo from "../components/seo"
import Section from '../components/Section'


const Works = () => {
  return(
    <>
      <Section>
        <Website/>
      </Section>
    </>
  )
}

export const Head = () => {
  return (
    <Seo/>
  )
}

export default Works
