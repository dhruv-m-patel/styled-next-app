import React from 'react';
import { Article as ArticleType } from '../types';
import styles from './Article.module.css';
import Link from 'next/link';

interface ArticleProps {
  item: ArticleType;
  link?: boolean;
}

const Article = ({ item, link = false }: ArticleProps): JSX.Element => (
  <article className={styles.card}>
    {link ? (
      <Link href="/articles/[id]" as={`/articles/${item.id}`} passHref>
        <h2 className={styles.link}>{item.title}</h2>
      </Link>
    ) : (
      <h2>{item.title}</h2>
    )}
    <p>{item.body}</p>
  </article>
);

export default Article;
