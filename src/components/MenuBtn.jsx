import React from 'react'
import { val } from '../components/variable.js'
import { slide as Menu } from "react-burger-menu"
//import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const MenuBtn = () => {
  return(
    <Menu
      right
      width={600}>
      <ul>
        <Item>
          <AniLink paintDrip hex="#4FB2C0" to="#">skill</AniLink>
        </Item>
        <Item>
          <AniLink paintDrip hex="#4FB2C0" component={Link} to="#">works</AniLink>
        </Item>
        <Item>
          <AniLink paintDrip hex="#4FB2C0" component={Link} to="#">history</AniLink>
        </Item>
      </ul>
    </Menu>
  )
}


const Item = styled.li`
  font-size: ${val.s24};
  list-style: none;
  margin-right: ${val.s56};
  position: relative;
  a{
    transition: 1s;
  &:hover{
    color: ${val.mint};
    }
  }
  &:after{
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${val.mint};
    transform: scale(0,1);
    transition: transform 0.3s;
  }
  &:hover::after{
    transform: scale(1,1);
  }
`

export default MenuBtn
