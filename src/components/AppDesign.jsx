import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
//import { IconContext } from "@react-icons/all-files/IconContext"
import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal"
import { BiTime } from "@react-icons/all-files/bi/BiTime"
import { val } from './variable.js'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import Title from "./Title"

const AppDesign = () => {

  const data = useStaticQuery(
    graphql`
      query {
        allMdx (filter: {frontmatter: {category: {in: "app"}}}){
          edges {
            node {
              frontmatter {
                title
                date
                slug
                hero_image{
                  childImageSharp {
                    gatsbyImageData(
                      width:320
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                    }
                  }
                }
              }
            }
          }
        }
      `)
  return (
      <>
        <Title text="App" />
        <ContainerStart>
        {data.allMdx.edges.map((edge) => (
        <AniLink paintDrip hex="#B61A24" component={Link} to={`/posts/${edge.node.frontmatter.slug}`}>
          <Item id={edge.node.frontmatter.slug} initial={{opacity: 0,translateY: 100}} whileInView={{opacity: 1, translateY: 0}} transition={{ duration: 1 }}>
            <div className={edge.node.frontmatter.slug}>
            <GatsbyImage
              image={getImage(edge.node.frontmatter.hero_image)}
              alt={edge.node.frontmatter.slug} />
            </div>
            {/* <IconContext.Provider value={{ className: 'rightArrow' }}> */}
            <Hover>view<BiLinkExternal /></Hover>
            {/* </IconContext.Provider> */}
            <Time><BiTime />{edge.node.frontmatter.date}</Time>
            <WorksTitle>
                {edge.node.frontmatter.title}
            </WorksTitle>
          </Item>
        </AniLink>
        ))}
        </ContainerStart>
      </>
  );
};


const ContainerStart = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`

const Item = styled(motion.div)`
  position: relative;
  margin-bottom: ${val.s56};
  overflow: hidden;
  margin-right: 2rem;
  background: #fff;
  box-shadow: ${val.shadow};
  &:hover{
    div{
      top: 0;
      opacity: 0.9;
    }
    img{
      zoom: 1.2;
    }
  }
`

const Hover = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  top: 240px;
  color: #fff;
  letter-spacing: .3em;
  transition: .5s;
  background: rgba(0,0,0,0.9);
  opacity: 0;
`
const WorksTitle = styled.h3`
  font-size: ${val.s14};
  font-weight: 400;
  text-align: center;
    a{
      text-decoration: none;
    }
`

const Time = styled.time`
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-size: ${val.s12};
  color: #666;
  text-decoration: none;
  padding: .5rem 1rem;
`


export default AppDesign;
