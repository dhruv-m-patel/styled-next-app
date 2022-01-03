import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Article as ArticleType } from '../types';

const Card = styled.article`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export interface ArticleProps {
  item: ArticleType;
  link?: boolean;
}

const Article = ({ item, link = false }: ArticleProps): JSX.Element => (
  <Card>
    {link ? (
      <Link href="/articles/[id]" as={`/articles/${item.id}`} passHref>
        <StyledLink href={`/articles/${item.id}`}>
          <h2>{item.title}</h2>
        </StyledLink>
      </Link>
    ) : (
      <h2>{item.title}</h2>
    )}
    <p>{item.body}</p>
  </Card>
);

export default Article;
