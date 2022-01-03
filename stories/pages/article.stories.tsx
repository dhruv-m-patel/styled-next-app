import React from 'react';
import Article from '../../src/pages/articles/[id]/index';

const story = { title: 'Pages/Article', component: Article };

export const WithArticle = () => (
  <Article
    article={{
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    }}
  />
);

export default story;
