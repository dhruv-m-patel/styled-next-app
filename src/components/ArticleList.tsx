import React from 'react';
import styled from 'styled-components';
import { ListOfArticles } from '../types';
import Article from './Article';

const Grid = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

interface ArticleListProps {
  articles: ListOfArticles;
}

const ArticleList = ({ articles }: ArticleListProps): JSX.Element => (
  <Grid>
    {articles.map((item) => (
      <Article key={item.id} item={item} link />
    ))}
  </Grid>
);

export default ArticleList;
