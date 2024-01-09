import React from 'react';
import '../reset.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContain = styled.div`
  height:10vh;
  align-items:center;
  font-size: 16px;
  color: black;

`;

const FooterLink = styled(Link)`
  color: inherit;
  margin-right:3vw;
`;

export default function Footer() {
  return (
    <FooterContain>
      <FooterLink to='/about'>
        About us
      </FooterLink>
      <FooterLink to='/help'>
        Help
      </FooterLink>
    </FooterContain>
  );
}
