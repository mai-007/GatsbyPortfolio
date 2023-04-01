import React from 'react'
import Title from './Title.jsx'
import styled from '@emotion/styled'
import Section from './Section'
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { Link } from 'gatsby'

const ThisSite = (props) => {

  return (
    <>
    <Section>
      <Title text="This site"/>
        <Text>
          このサイトはGatsbyにてフルスタックで制作致しました。
          cssはEmotion,アニメーションはframer-motionを使用しています。<br/>
          各実績のページはMDXにて記載し自動でページ化させています。<br/>
          <LinkWrap>
            <Link to={"https://github.com/ma-kotou/MyPortfolio02"} target="_blank" rel="noopener noreferrer">
              <AiFillGithub/>&nbsp;https://github.com/ma-kotou/MyPortfolio02
            </Link>
          </LinkWrap>
        </Text>
      </Section>
    </>
  )
}

const Text = styled.p`
  max-width: 1080px;
  margin: 0 auto 72px;
  line-height: 2em;
  text-align: center;
`

const LinkWrap = styled.span`
  border-bottom: 1px solid #222;
  margin: 1rem 0;
`


export default ThisSite
