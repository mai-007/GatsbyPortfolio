import React from 'react';
import styled from '@emotion/styled';
import { val } from './variable.js';

const Footer = () => {
  return (
    <FooterWrap>
      <div>© m.kotou portfolio {new Date().getFullYear()}</div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  font-size: 0.75rem;
  color: ${val.white};
  text-align: center;
  padding: 0.5rem;
  background-color: ${val.black};
`

export default Footer;
