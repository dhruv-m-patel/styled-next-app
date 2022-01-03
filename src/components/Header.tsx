import React from 'react';
import styled from 'styled-components';
import Meta from './Meta';

const Title = styled.h1`
  color: #333;
  text-decoration: none;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

export interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => (
  <header>
    <Meta title={title} description={title} />
    <Title>{title}</Title>
  </header>
);

export default Header;
