import React from 'react';
import { ListOfArticles } from '../types';
import Article from './Article';
import styles from './ArticleList.module.css';

interface ArticleListProps {
  articles: ListOfArticles;
}

const ArticleList = ({ articles }: ArticleListProps): JSX.Element => (
  <section className={styles.grid}>
    {articles.map((item) => (
      <Article key={item.id} item={item} link />
    ))}
  </section>
);

export default ArticleList;
