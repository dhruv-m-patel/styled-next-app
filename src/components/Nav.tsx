import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 50px;
  padding: 10px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
  }

  & ul > li > a {
    margin: 5px 15px;
  }
`;

const Nav = (): JSX.Element => (
  <StyledNav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
