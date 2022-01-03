import React from 'react';
import Layout from './Layout';

const story = {
  title: 'Components/Layout',
  component: Layout,
};

export const Default = () => (
  <Layout>
    <h1>This content is rendered inside Layout component</h1>
  </Layout>
);

export default story;
