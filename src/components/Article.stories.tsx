import React from 'react';
import Article, { ArticleProps } from './Article';

const article = {
  userId: 1,
  id: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

const story = {
  title: 'Components/Article',
  component: Article,
};

const Template = (args: Omit<ArticleProps, 'item'>) => (
  <Article item={article} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  link: {
    default: false,
    type: 'boolean',
  },
};

export default story;
