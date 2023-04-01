import React, {useState} from 'react'
import Footer from './Footer'
import { Global, css } from '@emotion/react'
import { val } from './variable.js'
import Header from './Header'
import ScrollDown from './ScrollDown'


const Layout = ({ children }) => {
  return (
    <>
      <Global styles={styles} />
        <main>
        <Header/>
        <ScrollDown />
          {children}
        </main>
        <Footer />
    </>
  );
};

/* GlobalStyle */

const styles = css`
  body {
  color: ${val.black};
  letter-spacing: .05em;
  box-sizing: border-box;
  font-family: gill-sans-nova, sans-serif;
  }
  main{
    background: ${val.white};
    position: relative;
    min-height: calc(100vh - 60px);
  }

  a {
    color: ${val.black};
    text-decoration: none;
    cursor: pointer;
  }

  h1{
    font-size: 2rem;
  }
  h2{
    font-size: ${val.s32};
  }
  h3{
    font-size: 1.125rem;
  }
  h4{
    margin: 0;
  }
  img{
    margin-bottom: 72px;
  }
  .rightArrow{
    margin-left: 1rem;
    animation: advance 0.5 ease 0s 1 normal;
  }
  button{
    border: none;
  }

  //blog style
  .block-list{
    display: flex;
    margin: 0 auto;
    justify-content: start;
    align-items: center;
    ul{
      display: flex;
      margin-bottom: .5rem;
      li{
        margin-left: .8rem;
        list-style: none;
        font-size: 12px;
        color: #000;
        border: 1px solid #000;
        padding: 2px 6px;
        border-radius: 8px;
      }
    }
  }
  .center{
    text-align: center;
    margin: 0 auto;
  }
  /* hamburgerMenu */
  .bm-burger-button{
    width: 100px;
    height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    background: ${val.black};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    border: none;
    transition: 1s;
    span{
      width: 32px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .bm-burger-bars{
        display: block;
        position: initial!important;
        width: 100%;
        height: 1px!important;
        background : #fff;
        margin-bottom: 10px;
        &:last-of-type{
          margin-bottom: 0;
        }
      }
    }
  }
  .bm-burger-bars-hover{
    background: ${val.mint};
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${val.mint};
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  /* burgerMenu */
  .bm-menu{
    background: ${val.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bm-item-list{
    max-width: 960px;
    margin: 200px auto 0;
  }
  .bm-item li{
    font-size: ${val.s24};
    margin-bottom: ${val.s32};
  }

  /* Gatsby defaultStyle打ち消し*/
  .tl-edges{
    overflow-x: initial!important;
  }
  .tl-wrapper{
    float: none!important;
    position: static!important
  }
`

export default Layout;
